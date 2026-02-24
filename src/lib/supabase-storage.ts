import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const BUCKET_NAME = "members-pdfs";

/**
 * Upload a PDF file to Supabase storage
 * Deletes any existing PDFs first to ensure only one exists at a time
 */
export async function uploadPDF(file: File): Promise<string | null> {
  try {
    // Validate file is PDF
    if (file.type !== "application/pdf") {
      throw new Error("Only PDF files are allowed");
    }

    // Delete all existing files first
    await deleteAllPDFs();

    // Upload new PDF with original filename
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(file.name, file, {
        upsert: false,
      });

    if (error) {
      throw error;
    }

    // Get public URL
    const { data: publicData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(file.name);

    return publicData?.publicUrl || null;
  } catch (error) {
    console.error("Error uploading PDF:", error);
    throw error;
  }
}

/**
 * Get the current PDF URL if it exists
 * Returns the first (and should be only) PDF in the bucket
 */
export async function getPDFUrl(): Promise<string | null> {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list();

    if (error) {
      throw error;
    }

    // Get first PDF file if it exists
    const pdfFile = data?.[0];

    if (!pdfFile) {
      return null;
    }

    const { data: publicData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(pdfFile.name);

    return publicData?.publicUrl || null;
  } catch (error) {
    console.error("Error getting PDF URL:", error);
    return null;
  }
}

/**
 * Delete all PDFs from storage
 */
export async function deleteAllPDFs(): Promise<void> {
  try {
    const { data, error: listError } = await supabase.storage
      .from(BUCKET_NAME)
      .list();

    if (listError) {
      console.error("Error listing files:", listError);
      return;
    }

    if (!data || data.length === 0) {
      return;
    }

    const filesToDelete = data.map((file) => file.name);

    const { error: deleteError } = await supabase.storage
      .from(BUCKET_NAME)
      .remove(filesToDelete);

    if (deleteError) {
      throw deleteError;
    }
  } catch (error) {
    console.error("Error deleting PDFs:", error);
    throw error;
  }
}

/**
 * Delete the current PDF from storage
 */
export async function deletePDF(): Promise<void> {
  await deleteAllPDFs();
}
