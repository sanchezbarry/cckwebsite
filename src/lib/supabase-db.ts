import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
)

export interface CoffeeOrder {
  id?: string
  date: string
  shift: "am" | "pm"
  icedBlack: number
  hotBlack: number
  icedWhite: number
  hotWhite: number
  espresso: number
  totalShift?: number
  created_at?: string
  updated_at?: string
}

/**
 * Get or create coffee orders record for a specific date and shift
 */
export async function getCoffeeOrders(
  date: string,
  shift: "am" | "pm"
): Promise<CoffeeOrder | null> {
  try {
    const { data, error } = await supabase
      .from("coffee_orders")
      .select("*")
      .eq("date", date)
      .eq("shift", shift)
      .single()

    if (error && error.code !== "PGRST116") {
      // PGRST116 means no rows found, which is fine
      console.error("Error fetching coffee orders:", error)
      return null
    }

    if (!data) return null

    // Convert snake_case from DB to camelCase
    return {
      id: data.id,
      date: data.date,
      shift: data.shift,
      icedBlack: data.iced_black || 0,
      hotBlack: data.hot_black || 0,
      icedWhite: data.iced_white || 0,
      hotWhite: data.hot_white || 0,
      espresso: data.espresso || 0,
      totalShift: data.total_shift || 0,
      created_at: data.created_at,
      updated_at: data.updated_at,
    }
  } catch (error) {
    console.error("Error in getCoffeeOrders:", error)
    return null
  }
}

/**
 * Save or update coffee orders for a specific date and shift
 */
export async function saveCoffeeOrders(orders: CoffeeOrder): Promise<boolean> {
  try {
    // Calculate total shift if not provided
    const totalShift = orders.totalShift || (orders.icedBlack + orders.hotBlack + orders.icedWhite + orders.hotWhite + orders.espresso)
    
    const { error } = await supabase.from("coffee_orders").upsert(
      {
        date: orders.date,
        shift: orders.shift,
        iced_black: orders.icedBlack,
        hot_black: orders.hotBlack,
        iced_white: orders.icedWhite,
        hot_white: orders.hotWhite,
        espresso: orders.espresso,
        total_shift: totalShift,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "date,shift",
      }
    )

    if (error) {
      console.error("Error saving coffee orders:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in saveCoffeeOrders:", error)
    return false
  }
}

/**
 * Get all orders for a specific date (both AM and PM)
 */
export async function getDailyOrders(
  date: string
): Promise<{ am: CoffeeOrder | null; pm: CoffeeOrder | null }> {
  try {
    const { data, error } = await supabase
      .from("coffee_orders")
      .select("*")
      .eq("date", date)

    if (error) {
      console.error("Error fetching daily orders:", error)
      return { am: null, pm: null }
    }

    const convertData = (row: any): CoffeeOrder => ({
      id: row.id,
      date: row.date,
      shift: row.shift,
      icedBlack: row.iced_black || 0,
      hotBlack: row.hot_black || 0,
      icedWhite: row.iced_white || 0,
      hotWhite: row.hot_white || 0,
      espresso: row.espresso || 0,
      totalShift: row.total_shift || 0,
      created_at: row.created_at,
      updated_at: row.updated_at,
    })

    const amRow = data?.find((d) => d.shift === "am")
    const pmRow = data?.find((d) => d.shift === "pm")

    return {
      am: amRow ? convertData(amRow) : null,
      pm: pmRow ? convertData(pmRow) : null,
    }
  } catch (error) {
    console.error("Error in getDailyOrders:", error)
    return { am: null, pm: null }
  }
}
