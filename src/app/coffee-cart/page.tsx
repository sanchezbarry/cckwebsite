"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getCoffeeOrders, saveCoffeeOrders, getDailyOrders, CoffeeOrder } from "@/lib/supabase-db"
import { format } from "date-fns"

interface OrderCounts {
  icedBlack: number
  hotBlack: number
  icedWhite: number
  hotWhite: number
  espresso: number
}

interface ShiftData {
  am: OrderCounts & { id?: string }
  pm: OrderCounts & { id?: string }
}

const defaultOrderCounts: OrderCounts = {
  icedBlack: 0,
  hotBlack: 0,
  icedWhite: 0,
  hotWhite: 0,
  espresso: 0,
}

const defaultShiftData: ShiftData = {
  am: defaultOrderCounts,
  pm: defaultOrderCounts,
}

export default function CoffeeCartPage() {
  const [shiftData, setShiftData] = useState<ShiftData>(defaultShiftData)
  const [currentShift, setCurrentShift] = useState<"am" | "pm">("am")
  const [selectedDate] = useState(getToday())
  const [phoneNumber, setPhoneNumber] = useState("")
  const [mounted, setMounted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  // Format date as YYYY-MM-DD
  function getToday(): string {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  // Load data from localStorage and Supabase on mount/date change
  useEffect(() => {
    const loadData = async () => {
      setMounted(true)
      const localStorageKey = `coffee-cart-${selectedDate}`
      const cached = localStorage.getItem(localStorageKey)

      if (cached) {
        // Use local cache if available
        setShiftData(JSON.parse(cached))
      } else {
        // Fetch from DB if no local cache
        const { am, pm } = await getDailyOrders(selectedDate)
        const newData: ShiftData = {
          am: am ? { ...am } : defaultOrderCounts,
          pm: pm ? { ...pm } : defaultOrderCounts,
        }
        setShiftData(newData)
      }
      setSubmitMessage(null)
    }

    loadData()
  }, [selectedDate])

  // Save data to localStorage whenever it changes (local only)
  useEffect(() => {
    if (!mounted) return
    const localStorageKey = `coffee-cart-${selectedDate}`
    localStorage.setItem(localStorageKey, JSON.stringify(shiftData))
  }, [shiftData, selectedDate, mounted])

  const handleAddOrder = (coffeeType: keyof OrderCounts) => {
    setShiftData((prev) => ({
      ...prev,
      [currentShift]: {
        ...prev[currentShift],
        [coffeeType]: prev[currentShift][coffeeType] + 1,
      },
    }))
  }

  const handleRemoveOrder = (coffeeType: keyof OrderCounts) => {
    setShiftData((prev) => ({
      ...prev,
      [currentShift]: {
        ...prev[currentShift],
        [coffeeType]: Math.max(0, prev[currentShift][coffeeType] - 1),
      },
    }))
  }

  const handleReset = () => {
    if (confirm(`Reset all data for ${currentShift.toUpperCase()} shift?`)) {
      setShiftData((prev) => ({
        ...prev,
        [currentShift]: defaultOrderCounts,
      }))
    }
  }

  const handleResetAllDay = () => {
    if (confirm("Reset all data for this entire day?")) {
      setShiftData(defaultShiftData)
    }
  }

  const handleSubmitShift = async () => {
    if (!phoneNumber.trim()) {
      setSubmitMessage({
        type: "error",
        text: "Please enter a phone number to submit via WhatsApp.",
      })
      return
    }

    setSubmitting(true)
    try {
      const shiftToSubmit = currentShift
      const orders = shiftData[shiftToSubmit]
      const totalCups = Object.values(orders).reduce((a, b) => a + b, 0)

      // Save to database
      await saveCoffeeOrders({
        date: selectedDate,
        shift: shiftToSubmit,
        icedBlack: orders.icedBlack,
        hotBlack: orders.hotBlack,
        icedWhite: orders.icedWhite,
        hotWhite: orders.hotWhite,
        espresso: orders.espresso,
      })

      // Build WhatsApp message
      const message = `☕ Coffee Cart Orders - ${format(new Date(selectedDate), "PPP")}\n\n${shiftToSubmit.toUpperCase()} Shift:\n\nIced Black: ${orders.icedBlack}\nHot Black: ${orders.hotBlack}\nIced White: ${orders.icedWhite}\nHot White: ${orders.hotWhite}\nEspresso: ${orders.espresso}\n\nTotal: ${totalCups} cups`

      // Open WhatsApp with message (prepend 65 to phone number)
      const fullPhoneNumber = `65${phoneNumber}`
      const encodedMessage = encodeURIComponent(message)
      const waLink = `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`
      window.open(waLink, "_blank")

      setSubmitMessage({
        type: "success",
        text: `${shiftToSubmit.toUpperCase()} shift submitted! Total: ${totalCups} cups. Opening WhatsApp...`,
      })

      // Clear message after 3 seconds
      setTimeout(() => setSubmitMessage(null), 3000)
    } catch (err) {
      setSubmitMessage({
        type: "error",
        text: "Failed to submit. Please try again.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  const currentOrders = shiftData[currentShift]
  const totalCurrentShift = Object.values(currentOrders).reduce((a, b) => a + b, 0)
  const totalDay =
    Object.values(shiftData.am).reduce((a, b) => a + b, 0) +
    Object.values(shiftData.pm).reduce((a, b) => a + b, 0)

  const coffeeOptions = [
    { id: "icedBlack", label: "Iced Black" },
    { id: "hotBlack", label: "Hot Black" },
    { id: "icedWhite", label: "Iced White" },
    { id: "hotWhite", label: "Hot White" },
    { id: "espresso", label: "Espresso" },
  ]

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-slate-600 dark:text-slate-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-bold font-display">
            Coffee Cart Orders
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
           Enter orders here!
          </p>
        </div>

        {/* Phone Number and Date Info */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Shift Lead's Phone Number
            </Label>
            <div className="flex items-center">
              <span className="text-md font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-l-lg border border-r-0 border-slate-300 dark:border-slate-700">
                +65
              </span>
              <Input
                id="phone"
                type="tel"
                placeholder="XXXXXXXX"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="rounded-l-none border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:bg-slate-800"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Format: 8-digit number (e.g., 98765432)
            </p>
          </div>
          <div>
            <Label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Date
            </Label>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white">
              {format(new Date(selectedDate), "PPP")}
            </div>
          </div>
        </div>
        {submitMessage && (
          <div
            className={`mb-6 p-3 rounded-lg text-sm font-medium ${
              submitMessage.type === "success"
                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        {/* Main Tabs */}
        <Tabs value={currentShift} onValueChange={(value) => setCurrentShift(value as "am" | "pm")}>
          <TabsList className="mb-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1 h-10">
            <TabsTrigger value="am" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm text-slate-700 dark:text-slate-300">
              AM Shift
            </TabsTrigger>
            <TabsTrigger value="pm" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm text-slate-700 dark:text-slate-300">
              PM Shift
            </TabsTrigger>
          </TabsList>

          {["am", "pm"].map((shift) => (
            <TabsContent key={shift} value={shift} className="space-y-4">
              {/* Coffee Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {coffeeOptions.map((coffee) => (
                  <div
                    key={coffee.id}
                    className="flex flex-col p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      {coffee.label}
                    </h3>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                      {currentOrders[coffee.id as keyof OrderCounts]}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Button
                        onClick={() => handleRemoveOrder(coffee.id as keyof OrderCounts)}
                        variant="outline"
                        className="flex-1 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        −
                      </Button>
                      <Button
                        onClick={() => handleAddOrder(coffee.id as keyof OrderCounts)}
                        className="flex-1 bg-primary text-white hover:bg-primary/90 dark:hover:bg-primary/80"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shift Summary Card */}
              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <CardHeader className="pb-3">
                  <CardTitle className="text-slate-900 dark:text-white">
                    {shift.toUpperCase()} Shift Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {coffeeOptions.map((coffee) => (
                      <div
                        key={coffee.id}
                        className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-center"
                      >
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wider">
                          {coffee.label}
                        </p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          {currentOrders[coffee.id as keyof OrderCounts]}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Separator className="bg-slate-200 dark:bg-slate-800" />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {shift.toUpperCase()} Total Cups
                    </span>
                    <span className="text-3xl font-bold text-primary">{totalCurrentShift}</span>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="flex-1 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      Reset Shift
                    </Button>
                    <Button
                      onClick={handleSubmitShift}
                      disabled={submitting}
                      className="flex-1 bg-primary text-white hover:bg-primary/90 dark:hover:bg-primary/80"
                    >
                      {submitting ? "Submitting..." : "Submit Shift Total"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Daily Total Section */}
        <Card className="border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-slate-800 text-white mt-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-white">Daily Total</CardTitle>
            <CardDescription className="text-slate-400">
              {new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-sm text-slate-400 font-semibold mb-2">AM Shift</p>
                <p className="text-4xl font-bold text-white">
                  {Object.values(shiftData.am).reduce((a, b) => a + b, 0)}
                </p>
              </div>
              <div className="border-l border-r border-slate-700 px-8">
                <p className="text-sm text-slate-400 font-semibold mb-2">PM Shift</p>
                <p className="text-4xl font-bold text-white">
                  {Object.values(shiftData.pm).reduce((a, b) => a + b, 0)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 font-semibold mb-2">Daily Total</p>
                <p className="text-4xl font-bold text-white">{totalDay}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Breakdown Table */}
        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-slate-900 dark:text-white">Detailed Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Coffee Type
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      AM
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      PM
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coffeeOptions.map((coffee) => {
                    const amCount = shiftData.am[coffee.id as keyof OrderCounts]
                    const pmCount = shiftData.pm[coffee.id as keyof OrderCounts]
                    const total = amCount + pmCount
                    return (
                      <tr
                        key={coffee.id}
                        className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <td className="py-3 px-4 text-slate-900 dark:text-white font-medium">
                          {coffee.label}
                        </td>
                        <td className="text-center py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">
                          {amCount}
                        </td>
                        <td className="text-center py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">
                          {pmCount}
                        </td>
                        <td className="text-center py-3 px-4 font-bold text-primary">{total}</td>
                      </tr>
                    )
                  })}
                  <tr className="border-t-2 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                    <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">TOTAL</td>
                    <td className="text-center py-3 px-4 font-bold text-slate-900 dark:text-white">
                      {Object.values(shiftData.am).reduce((a, b) => a + b, 0)}
                    </td>
                    <td className="text-center py-3 px-4 font-bold text-slate-900 dark:text-white">
                      {Object.values(shiftData.pm).reduce((a, b) => a + b, 0)}
                    </td>
                    <td className="text-center py-3 px-4 font-bold text-primary">{totalDay}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 mt-6">
          <Button
            onClick={handleResetAllDay}
            variant="outline"
            className="flex-1 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Reset Entire Day
          </Button>
        </div>
      </div>
    </div>
  )
}
