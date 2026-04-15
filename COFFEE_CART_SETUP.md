# Coffee Cart Database Setup

## Create the `coffee_orders` Table in Supabase

To store coffee cart orders in your Supabase database, you need to create the following table:

### SQL to Execute in Supabase SQL Editor

Go to your Supabase dashboard → SQL Editor and run:

```sql
-- Create coffee_orders table
CREATE TABLE coffee_orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  date DATE NOT NULL,
  shift TEXT NOT NULL CHECK (shift IN ('am', 'pm')),
  iced_black INTEGER DEFAULT 0,
  hot_black INTEGER DEFAULT 0,
  iced_white INTEGER DEFAULT 0,
  hot_white INTEGER DEFAULT 0,
  espresso INTEGER DEFAULT 0,
  total_shift INTEGER DEFAULT 0,
  total_tips DECIMAL(10, 2) DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(date, shift)
);

-- Create an index for efficient queries
CREATE INDEX coffee_orders_date_shift_idx ON coffee_orders(date, shift);
```

### Column Descriptions

- `id`: Unique identifier for each record
- `date`: The date of the orders (format: YYYY-MM-DD)
- `shift`: Either 'am' or 'pm'
- `iced_black`: Count of iced black coffee
- `hot_black`: Count of hot black coffee
- `iced_white`: Count of iced white coffee
- `hot_white`: Count of hot white coffee
- `espresso`: Count of espresso shots
- `total_shift`: Total cups for the shift (calculated field)
- `total_tips`: Tips collected during the shift (PM shift only)
- `created_at`: Timestamp when record was created
- `updated_at`: Timestamp when record was last modified

### Migration for Existing Tables

If you already have a `coffee_orders` table, add the missing columns:

```sql
ALTER TABLE coffee_orders ADD COLUMN total_shift INTEGER DEFAULT 0;
ALTER TABLE coffee_orders ADD COLUMN total_tips DECIMAL(10, 2) DEFAULT NULL;
```

### Enable RLS (Row Level Security) - Required Configuration

Since the coffee cart uses anonymous authentication (public anon key), you need to either:

**Option 1: Disable RLS (Simpler for Free Tier)**
1. Go to Supabase Dashboard → Authentication → Policies
2. Find the `coffee_orders` table
3. Click the **RLS toggle to turn it OFF**
4. This allows the anon user to read and write without restrictions

**Option 2: Create RLS Policies (More Secure)**

If you want to keep RLS enabled, run this SQL to create policies:

```sql
-- Enable RLS on coffee_orders table
ALTER TABLE coffee_orders ENABLE ROW LEVEL SECURITY;

-- Policy to allow anonymous users to read all rows
CREATE POLICY "Allow anonymous read" ON coffee_orders
  FOR SELECT
  USING (true);

-- Policy to allow anonymous users to insert rows
CREATE POLICY "Allow anonymous insert" ON coffee_orders
  FOR INSERT
  WITH CHECK (true);

-- Policy to allow anonymous users to update rows
CREATE POLICY "Allow anonymous update" ON coffee_orders
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Policy to allow anonymous users to delete rows (optional)
CREATE POLICY "Allow anonymous delete" ON coffee_orders
  FOR DELETE
  USING (true);
```

**We recommend Option 1 (Disable RLS)** for the free tier, as it's simpler and the coffee cart data isn't sensitive.

### Testing

Once the table is created, the coffee cart page will automatically:
- Create new records when orders are entered
- Update existing records for the same date/shift combination
- Fetch data from the database instead of localStorage

---

## Data Flow

1. **AM Shift Staff** logs in → Uses coffee cart with saved AM shift data from DB
2. **PM Shift Staff** logs in → Uses coffee cart with fresh PM shift data from DB
3. **Data is saved automatically** every 500ms when changes are made
4. **Daily totals are calculated** on the fly from both AM and PM shift records
