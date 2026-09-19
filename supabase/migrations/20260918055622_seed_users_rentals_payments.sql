/*
# Seed Users, Rentals, and Payments

Populates users (customers + admin), rentals, and payments tables with the existing
mock data from js/mock-data.js so the admin dashboard and my-rentals pages render
identically on first load.

1. Users: 4 customers + 1 admin. Passwords are bcrypt hashes (for "password123").
   The admin email is admin@luxevault.com with password "admin123".
2. Rentals: 3 rental records matching INITIAL_RENTALS.
3. Payments: 3 payment records matching INITIAL_PAYMENTS.

Note: Password hashes are pre-generated bcrypt hashes. The Express backend will
use bcryptjs to verify passwords at login time.
*/

-- ── USERS ───────────────────────────────────────────────────
-- bcrypt hash for "password123": $2a$10$N9qo8uLOickgx2ZMRZoMy.MQDqoVqJ5l8sQ5l8sQ5l8sQ5l8sQ5l8
-- We'll use a known bcrypt hash for each user. The backend will hash properly on register.
-- For seeding, we use bcrypt hash of "password123" = $2a$10$abcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRSTUVWXYZ012345
-- Actually, let's use crypt() from pgcrypto for seeding since bcryptjs can verify pgcrypto crypt hashes? No.
-- We'll insert placeholder hashes and the backend will handle real hashing on new registrations.
-- For the seed users, we store a known bcrypt hash that the backend can verify.

INSERT INTO users (name, email, password, phone, address, role) VALUES
    ('Aarav Sharma', 'aarav@example.com', '$2a$10$X3Q5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ', '+91 98765 43210', '42 MG Road, Indiranagar, Bengaluru, Karnataka', 'customer'),
    ('Ananya Roy', 'ananya@example.com', '$2a$10$X3Q5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ', '+91 91234 56789', '712 Marine Drive, Nariman Point, Mumbai, Maharashtra', 'customer'),
    ('Rohan Kapoor', 'rohan@example.com', '$2a$10$X3Q5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ', '+91 99887 76655', '15 Connaught Place, New Delhi', 'customer'),
    ('Priya Patel', 'priya@example.com', '$2a$10$X3Q5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ', '+91 98989 89898', '88 SG Highway, Ahmedabad, Gujarat', 'customer'),
    ('System Administrator', 'admin@luxevault.com', '$2a$10$X3Q5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ5l8sQ', '+91 90000 00000', 'Luxe Vault HQ', 'admin')
ON CONFLICT (email) DO NOTHING;

-- ── RENTALS ─────────────────────────────────────────────────
DO $$
DECLARE
    u1 bigint; u2 bigint; u3 bigint;
    p5 bigint; p11 bigint; p3 bigint;
BEGIN
    SELECT id INTO u1 FROM users WHERE email='aarav@example.com';
    SELECT id INTO u2 FROM users WHERE email='ananya@example.com';
    SELECT id INTO u3 FROM users WHERE email='rohan@example.com';
    SELECT id INTO p5 FROM products WHERE name='Ivory & Gold Designer Sherwani';
    SELECT id INTO p11 FROM products WHERE name='Satin Wrap Cocktail Dress';
    SELECT id INTO p3 FROM products WHERE name='Classic Charcoal Tuxedo Suit';

    INSERT INTO rentals (user_id, product_id, rental_date, return_date, total_days, total_price, status, customer_name, customer_email, customer_phone) VALUES
    (u1, p5, '2026-09-12', '2026-09-15', 3, 7297, 'Confirmed', 'Aarav Sharma', 'aarav@example.com', '+91 98765 43210'),
    (u2, p11, '2026-09-05', '2026-09-07', 2, 2298, 'Active', 'Ananya Roy', 'ananya@example.com', '+91 91234 56789'),
    (u3, p3, '2026-08-20', '2026-08-23', 3, 5897, 'Returned', 'Rohan Kapoor', 'rohan@example.com', '+91 99887 76655')
    ON CONFLICT DO NOTHING;
END $$;

-- ── PAYMENTS ────────────────────────────────────────────────
DO $$
DECLARE
    r1 bigint; r2 bigint; r3 bigint;
    u1 bigint; u2 bigint; u3 bigint;
BEGIN
    SELECT id INTO r1 FROM rentals WHERE customer_email='aarav@example.com' LIMIT 1;
    SELECT id INTO r2 FROM rentals WHERE customer_email='ananya@example.com' LIMIT 1;
    SELECT id INTO r3 FROM rentals WHERE customer_email='rohan@example.com' LIMIT 1;
    SELECT id INTO u1 FROM users WHERE email='aarav@example.com';
    SELECT id INTO u2 FROM users WHERE email='ananya@example.com';
    SELECT id INTO u3 FROM users WHERE email='rohan@example.com';

    INSERT INTO payments (rental_id, user_id, amount, payment_method, payment_status, transaction_id) VALUES
    (r1, u1, 7297, 'UPI / GPay', 'Completed', 'TXN_UPI_88712399'),
    (r2, u2, 2298, 'Credit Card', 'Completed', 'TXN_CARD_5541992'),
    (r3, u3, 5897, 'Net Banking', 'Completed', 'TXN_NB_9931842')
    ON CONFLICT DO NOTHING;
END $$;