import { NextRequest, NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";

// Set these as environment variables
const BUCKET_NAME = process.env.GCS_BUCKET_NAME!;
const PROJECT_ID = process.env.GCP_PROJECT_ID!;
const SERVICE_ACCOUNT_JSON = process.env.GCP_SERVICE_ACCOUNT_JSON!;

const storage = new Storage({
  projectId: PROJECT_ID,
  credentials: JSON.parse(SERVICE_ACCOUNT_JSON),
});

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Get text fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const instagram = formData.get("instagram") as string;
    const vehicle = formData.get("vehicle") as string;
    const description = formData.get("description") as string;

    // Prepare a folder for this submission
    const timestamp = Date.now();
    const folder = `submissions/${timestamp}_${encodeURIComponent(email)}`;

    // Upload files
    const files = formData.getAll("files") as File[];
    if (files.length < 3 || files.length > 5) {
      return NextResponse.json(
        { error: "Please upload 3 to 5 files." },
        { status: 400 }
      );
    }

    const uploadedFiles: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const gcsFile = storage
        .bucket(BUCKET_NAME)
        .file(`${folder}/${file.name}`);
      await gcsFile.save(buffer, {
        contentType: file.type,
        resumable: false,
        public: false,
      });
      uploadedFiles.push(gcsFile.name);
    }

    // Optionally, save the form data as a JSON file in the bucket
    const metadata = {
      name,
      email,
      phone,
      instagram,
      vehicle,
      description,
      files: uploadedFiles,
      submittedAt: new Date().toISOString(),
    };
    await storage
      .bucket(BUCKET_NAME)
      .file(`${folder}/submission.json`)
      .save(JSON.stringify(metadata), {
        contentType: "application/json",
        public: false,
      });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Upload failed" },
      { status: 500 }
    );
  }
}
