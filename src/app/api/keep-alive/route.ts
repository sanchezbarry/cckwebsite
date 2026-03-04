import { createClient } from "@supabase/supabase-js";

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // important
    );

    // Very lightweight query
    const { error } = await supabase
      .from("pingtable")
      .select("id")
      .limit(1);

    if (error) {
      return new Response("Supabase error", { status: 500 });
    }

    return new Response("ok", { status: 200 });

  } catch (err) {
    return new Response("Server error", { status: 500 });
  }
}