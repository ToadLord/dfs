"use client";
import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    vehicle: "",
    description: "", // <-- Add this line
    files: [] as File[],
  });
  const [previews, setPreviews] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "files" && files) {
      const newFiles: File[] = [];
      const previewUrls: string[] = [];

      for (const file of Array.from(files)) {
        // if (
        //   file.type === "image/heic" ||
        //   file.type === "image/heif" ||
        //   file.name.toLowerCase().endsWith(".heic") ||
        //   file.name.toLowerCase().endsWith(".heif")
        // ) {
        //   // Dynamically import heic2any only on the client
        //   try {
        //     const heic2any = (await import("heic2any")).default;
        //     const convertedBlob = (await heic2any({
        //       blob: file,
        //       toType: "image/png", // Convert to PNG
        //     })) as Blob;
        //     const convertedFile = new File(
        //       [convertedBlob],
        //       file.name.replace(/\.(heic|heif)$/i, ".png"), // Use .png extension
        //       { type: "image/png" }
        //     );
        //     newFiles.push(convertedFile);
        //     previewUrls.push(URL.createObjectURL(convertedFile));
        //   } catch (err) {
        //     // Optionally handle conversion error
        //   }
        // } else {
        newFiles.push(file);
        previewUrls.push(URL.createObjectURL(file));
        // }
      }

      // Combine with existing files, filter duplicates if desired
      const allFiles = [...form.files, ...newFiles].filter(
        (file, idx, arr) =>
          arr.findIndex((f) => f.name === file.name && f.size === file.size) ===
          idx
      );
      setForm((f) => ({ ...f, files: allFiles }));
      setPreviews([...previews, ...previewUrls]);
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("instagram", form.instagram);
      formData.append("vehicle", form.vehicle);
      formData.append("description", form.description);
      form.files.forEach((file) => formData.append("files", file));

      // Replace this endpoint with your backend API that uploads to Google Cloud Storage
      const res = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Submission failed. Please try again.");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRemoveFile = (idxToRemove: number) => {
    const newFiles = form.files.filter((_, idx) => idx !== idxToRemove);
    setForm((f) => ({ ...f, files: newFiles }));
    const newPreviews = previews.filter((_, idx) => idx !== idxToRemove);
    setPreviews(newPreviews);
  };

  if (success) {
    return (
      <main className="max-w-2xl mx-auto my-8 p-8 bg-gray-900 rounded-xl shadow-lg text-white">
        <h1 className="text-3xl font-bold text-blue-300 mb-4">
          Thank you for registering!
        </h1>
        <p>We’ve received your submission.</p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto my-8 p-8 bg-gray-900 rounded-xl shadow-lg text-white w-[95vw]">
      <h1 className="mb-2 text-3xl font-bold text-blue-300">
        Drive for Sight 2025 Registration Form
      </h1>
      <div className="mb-4 p-4 bg-yellow-100 text-gray-900 rounded">
        <p className="font-semibold mb-1">
          Welcome and thank you for your interest in Drive for Sight!
        </p>
        <p>
          We’re so excited to have you join us for this year’s charity car show
          happening on{" "}
          <span className="font-bold">September 6th at Billings Bridge</span>.
          Your participation helps support a great cause, and we can’t wait to
          see all the amazing builds and car lovers coming together.
        </p>
        <p className="mt-2">
          Questions? DM us on Instagram{" "}
          <span className="font-semibold">@driveforsight</span> or email{" "}
          <span className="font-semibold">driveforsight@gmail.com</span>.
        </p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            First &amp; Last Name <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="w-full rounded p-2 bg-gray-800 border border-gray-700 focus:border-blue-400"
            value={form.name}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="email">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="w-full rounded p-2 bg-gray-800 border border-gray-700 focus:border-blue-400"
            value={form.email}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="phone">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="tel"
            name="phone"
            id="phone"
            className="w-full rounded p-2 bg-gray-800 border border-gray-700 focus:border-blue-400"
            value={form.phone}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="instagram">
            @Instagram Handle <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="text"
            name="instagram"
            id="instagram"
            className="w-full rounded p-2 bg-gray-800 border border-gray-700 focus:border-blue-400"
            value={form.instagram}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="vehicle">
            Year, Make, and Model of Your Vehicle{" "}
            <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="text"
            name="vehicle"
            id="vehicle"
            className="w-full rounded p-2 bg-gray-800 border border-gray-700 focus:border-blue-400"
            value={form.vehicle}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="description">
            Describe your car as if you're explaining it to someone who can't
            see it. <span className="text-red-400">*</span>
          </label>
          <p className="text-sm text-gray-300 mb-2">
            What does it look like? What details or features make it stand out?
            Is there a story behind it or a feeling you hope it conveys? This
            description will be used to create an audio feature for guests with
            vision loss during the show.
          </p>
          <textarea
            required
            name="description"
            id="description"
            rows={4}
            className="w-full rounded p-2 bg-gray-800 border border-gray-700 focus:border-blue-400"
            value={form.description}
            onChange={handleTextareaChange}
            disabled={submitting}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="files">
            Please submit 3-5 photos of your vehicle. <span className="text-red-400">*</span>
          </label>
          <p className="text-sm text-gray-300 mb-2">
            Only PNG and JPG are accepted.
          </p>
          <label
            htmlFor="files"
            className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-lg p-6 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const files = Array.from(e.dataTransfer.files);
              // Accept all files, no count/size restriction
              const accepted = files;
              // Combine with existing files, filter duplicates if desired
              const allFiles = [...form.files, ...accepted].filter(
                (file, idx, arr) =>
                  arr.findIndex(
                    (f) => f.name === file.name && f.size === file.size
                  ) === idx
              );
              setForm((f) => ({ ...f, files: allFiles }));
              const previewUrls = allFiles.map((file) =>
                URL.createObjectURL(file)
              );
              setPreviews(previewUrls);
            }}
          >
            <svg
              className="w-10 h-10 mb-2 text-blue-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-5 4v-4m0 0l-2 2m2-2l2 2"
              ></path>
            </svg>
            <span className="text-blue-200">
              Click to select or drag & drop images here
            </span>
            <input
              required
              type="file"
              name="files"
              id="files"
              multiple
              accept="" // Remove restrictions by leaving this empty
              onChange={handleChange}
              disabled={submitting}
              className="hidden"
            />
          </label>
          <div className="flex flex-row gap-2 mt-2 overflow-x-auto max-w-full">
            {previews.map(
              (src, idx) =>
                src && (
                  <div key={idx} className="relative">
                    <img
                      src={src}
                      alt={`Preview ${idx + 1}`}
                      className="w-24 h-24 object-cover rounded border border-gray-700 flex-shrink-0"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(idx)}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-800"
                      aria-label="Remove image"
                    >
                      ×
                    </button>
                  </div>
                )
            )}
          </div>
        </div>
        {error && <div className="text-red-400 font-semibold">{error}</div>}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </main>
  );
}
