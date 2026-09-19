/*
# Luxe Vault — Full Database Schema

Creates the complete schema for the Luxe Vault clothing rental system.

1. New Tables
- `categories` — product categories (Dresses, Suits, Lehengas, etc.)
- `products` — rental clothing items with price, images, features, availability
- `users` — customer accounts (separate from Supabase auth.users; stores profile + hashed password)
- `rentals` — rental bookings linking a user and product with dates and totals
- `payments` — payment records for rentals
- `reviews` — product reviews with rating and comment

2. Security
- RLS enabled on every table.
- Since the Express backend uses the service-role key (server-side only), RLS policies
  are set to allow `anon, authenticated` access. The backend is the trust boundary —
  it validates ownership and authorization before writing to the database.
  This is a college-project app where the browser talks to the Express API,
  which in turn talks to Supabase with the service role key.

3. Notes
- `products.images` and `products.features` are JSON arrays.
- `users.password` stores a bcrypt hash (never plaintext).
- `rentals.status` is one of: Confirmed, Active, Returned, Cancelled.
- `payments.payment_status` defaults to Completed (simulated).
*/

-- ── CATEGORIES ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS categories (
    id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name        text NOT NULL UNIQUE,
    description text DEFAULT ''
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_read_categories" ON categories;
CREATE POLICY "anon_read_categories" ON categories FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "anon_write_categories" ON categories;
CREATE POLICY "anon_write_categories" ON categories FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "anon_update_categories" ON categories;
CREATE POLICY "anon_update_categories" ON categories FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "anon_delete_categories" ON categories;
CREATE POLICY "anon_delete_categories" ON categories FOR DELETE TO anon, authenticated USING (true);

-- ── PRODUCTS ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
    id               bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id      bigint REFERENCES categories(id) ON DELETE SET NULL,
    name             text NOT NULL,
    description      text DEFAULT '',
    price            numeric(10,2) NOT NULL DEFAULT 0,
    image_url        text DEFAULT '',
    size             text DEFAULT 'M',
    color            text DEFAULT '',
    availability     text DEFAULT 'Available',
    gender           text DEFAULT 'Unisex',
    security_deposit numeric(10,2) NOT NULL DEFAULT 0,
    rating           numeric(3,1) DEFAULT 5.0,
    reviews_count    integer DEFAULT 0,
    images           jsonb DEFAULT '[]'::jsonb,
    features         jsonb DEFAULT '[]'::jsonb,
    created_at       timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_read_products" ON products;
CREATE POLICY "anon_read_products" ON products FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "anon_write_products" ON products;
CREATE POLICY "anon_write_products" ON products FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "anon_update_products" ON products;
CREATE POLICY "anon_update_products" ON products FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "anon_delete_products" ON products;
CREATE POLICY "anon_delete_products" ON products FOR DELETE TO anon, authenticated USING (true);

-- ── USERS (app-level customer table) ─────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name       text NOT NULL,
    email      text NOT NULL UNIQUE,
    password   text NOT NULL,
    phone      text DEFAULT '',
    address    text DEFAULT '',
    role       text DEFAULT 'customer',
    created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_read_users" ON users;
CREATE POLICY "anon_read_users" ON users FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "anon_write_users" ON users;
CREATE POLICY "anon_write_users" ON users FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "anon_update_users" ON users;
CREATE POLICY "anon_update_users" ON users FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

-- ── RENTALS ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS rentals (
    id               bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id          bigint REFERENCES users(id) ON DELETE SET NULL,
    product_id       bigint REFERENCES products(id) ON DELETE SET NULL,
    rental_date      date NOT NULL,
    return_date      date NOT NULL,
    total_days       integer NOT NULL DEFAULT 1,
    total_price      numeric(10,2) NOT NULL DEFAULT 0,
    status           text DEFAULT 'Confirmed',
    customer_name    text DEFAULT '',
    customer_email   text DEFAULT '',
    customer_phone   text DEFAULT '',
    created_at       timestamptz DEFAULT now()
);

ALTER TABLE rentals ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_read_rentals" ON rentals;
CREATE POLICY "anon_read_rentals" ON rentals FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "anon_write_rentals" ON rentals;
CREATE POLICY "anon_write_rentals" ON rentals FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "anon_update_rentals" ON rentals;
CREATE POLICY "anon_update_rentals" ON rentals FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

-- ── PAYMENTS ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS payments (
    id             bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    rental_id      bigint REFERENCES rentals(id) ON DELETE SET NULL,
    user_id        bigint REFERENCES users(id) ON DELETE SET NULL,
    amount         numeric(10,2) NOT NULL DEFAULT 0,
    payment_method text DEFAULT 'Card',
    payment_status text DEFAULT 'Completed',
    transaction_id text DEFAULT '',
    created_at     timestamptz DEFAULT now()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_read_payments" ON payments;
CREATE POLICY "anon_read_payments" ON payments FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "anon_write_payments" ON payments;
CREATE POLICY "anon_write_payments" ON payments FOR INSERT TO anon, authenticated WITH CHECK (true);

-- ── REVIEWS ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS reviews (
    id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id    bigint REFERENCES users(id) ON DELETE SET NULL,
    product_id bigint REFERENCES products(id) ON DELETE CASCADE,
    rating     integer NOT NULL DEFAULT 5,
    comment    text DEFAULT '',
    created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_read_reviews" ON reviews;
CREATE POLICY "anon_read_reviews" ON reviews FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "anon_write_reviews" ON reviews;
CREATE POLICY "anon_write_reviews" ON reviews FOR INSERT TO anon, authenticated WITH CHECK (true);

-- ── INDEXES ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_availability ON products(availability);
CREATE INDEX IF NOT EXISTS idx_rentals_user ON rentals(user_id);
CREATE INDEX IF NOT EXISTS idx_rentals_product ON rentals(product_id);
CREATE INDEX IF NOT EXISTS idx_payments_rental ON payments(rental_id);
CREATE INDEX IF NOT EXISTS idx_reviews_product ON reviews(product_id);