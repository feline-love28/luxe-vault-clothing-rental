/*
# Seed Categories and Products

Populates categories and products with the existing mock data from js/mock-data.js.

1. Categories: 8 categories matching the frontend filter sidebar.
2. Products: 15 clothing items matching INITIAL_CLOTHES in mock-data.js.
   - category_id resolved by name lookup.
   - images/features stored as JSON arrays.
*/

-- ── CATEGORIES ──────────────────────────────────────────────
INSERT INTO categories (name, description) VALUES
    ('Dresses', 'Cocktail, wrap, and party dresses'),
    ('Suits', 'Suits and tuxedos for men'),
    ('Lehengas', 'Festive and bridal lehengas'),
    ('Sherwanis', 'Designer sherwanis for grooms'),
    ('Gowns', 'Evening gowns and ball gowns'),
    ('Formal Wear', 'Formal suits and office wear'),
    ('Party Wear', 'Party blazers and festive outfits'),
    ('Traditional Wear', 'Traditional Indian wear')
ON CONFLICT (name) DO NOTHING;

-- ── PRODUCTS ─────────────────────────────────────────────────
DO $$
DECLARE
    cat_dresses bigint; cat_lehengas bigint; cat_suits bigint;
    cat_sherwanis bigint; cat_gowns bigint; cat_party bigint;
    cat_traditional bigint; cat_formal bigint;
BEGIN
    SELECT id INTO cat_dresses FROM categories WHERE name='Dresses';
    SELECT id INTO cat_lehengas FROM categories WHERE name='Lehengas';
    SELECT id INTO cat_suits FROM categories WHERE name='Suits';
    SELECT id INTO cat_sherwanis FROM categories WHERE name='Sherwanis';
    SELECT id INTO cat_gowns FROM categories WHERE name='Gowns';
    SELECT id INTO cat_party FROM categories WHERE name='Party Wear';
    SELECT id INTO cat_traditional FROM categories WHERE name='Traditional Wear';
    SELECT id INTO cat_formal FROM categories WHERE name='Formal Wear';

    INSERT INTO products (category_id, name, description, price, image_url, size, color, availability, gender, security_deposit, rating, reviews_count, images, features) VALUES
    (cat_gowns, 'Midnight Velvet Evening Gown', 'An exquisite midnight navy velvet gown featuring a subtle off-shoulder cut and trailing mermaid silhouette. Perfect for galas, award nights, and high-end formal receptions.', 999, 'https://i.pinimg.com/736x/74/61/55/746155a95172ce75b150fa36ca25df24.jpg', 'M', 'Navy', 'Available', 'Women', 1500, 4.9, 28, '["https://i.pinimg.com/736x/74/61/55/746155a95172ce75b150fa36ca25df24.jpg","https://i.pinimg.com/736x/74/61/55/746155a95172ce75b150fa36ca25df24.jpg","https://i.pinimg.com/736x/74/61/55/746155a95172ce75b150fa36ca25df24.jpg"]'::jsonb, '["Premium Velvet Fabric","Dry Clean Only","Built-in Structure","Floor Length"]'::jsonb),
    (cat_lehengas, 'Royal Golden Zardosi Lehenga', 'A breathtaking bridal & festive lehenga handcrafted with intricate gold threadwork, sequins, and zardosi embroidery on a crimson silk background. Comes with custom net dupatta.', 1899, 'https://i.pinimg.com/736x/df/62/b7/df62b7616cb2026fcfcc021950bd805b.jpg', 'S', 'Gold', 'Available', 'Women', 2500, 5.0, 42, '["https://i.pinimg.com/736x/df/62/b7/df62b7616cb2026fcfcc021950bd805b.jpg","https://i.pinimg.com/736x/df/62/b7/df62b7616cb2026fcfcc021950bd805b.jpg","https://i.pinimg.com/736x/df/62/b7/df62b7616cb2026fcfcc021950bd805b.jpg"]'::jsonb, '["Handcrafted Zardosi Work","Includes Blouse & Dupatta","Heavy Silk Blend","Adjustable Waistband"]'::jsonb),
    (cat_suits, 'Classic Charcoal Tuxedo Suit', 'Tailored to perfection, this 3-piece charcoal tuxedo includes a slim-fit satin-lapel jacket, matching trousers, and a sleek waistcoat. Ideal for black-tie affairs and weddings.', 1299, 'https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg', 'L', 'Black', 'Available', 'Men', 2000, 4.8, 35, '["https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg","https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg","https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg"]'::jsonb, '["3-Piece Tuxedo Set","Italian Fabric Blend","Satin Lapel","Slim Fit"]'::jsonb),
    (cat_dresses, 'Emerald Silk Cocktail Dress', 'Vibrant emerald green cocktail dress with draped front detailing and a contemporary asymmetric hemline. Sleek, comfortable, and eye-catching for evening parties.', 799, 'https://i.pinimg.com/1200x/e7/b0/e5/e7b0e5b152e1ec724fb881836403171e.jpg', 'M', 'Emerald', 'Available', 'Women', 1000, 4.7, 19, '["https://i.pinimg.com/1200x/e7/b0/e5/e7b0e5b152e1ec724fb881836403171e.jpg","https://i.pinimg.com/1200x/e7/b0/e5/e7b0e5b152e1ec724fb881836403171e.jpg"]'::jsonb, '["100% Pure Silk Feel","Side Concealed Zipper","Mid-length Hem","Wrinkle Resistant"]'::jsonb),
    (cat_sherwanis, 'Ivory & Gold Designer Sherwani', 'Regal ivory sherwani embellished with fine resham and antique gold motif embroidery. Accompanied by silk churidar and matching designer stole.', 1699, 'https://i.pinimg.com/1200x/21/dd/ba/21ddba37d07466dad83b640c6c5974fb.jpg', 'XL', 'White', 'Rented', 'Men', 2200, 4.9, 31, '["https://i.pinimg.com/1200x/21/dd/ba/21ddba37d07466dad83b640c6c5974fb.jpg","https://i.pinimg.com/1200x/21/dd/ba/21ddba37d07466dad83b640c6c5974fb.jpg"]'::jsonb, '["Includes Churidar & Stole","Mandarin Collar","Embroidered Buttons","Royal Finish"]'::jsonb),
    (cat_party, 'Scarlet Red Party Blazer', 'Bold scarlet red textured party blazer with contrast velvet piping on shoulders and lapel. Perfect for cocktail receptions and sangeet night celebrations.', 699, 'https://i.pinimg.com/1200x/51/0a/cf/510acfb2e0a7f3b536b2a5a45aa4272b.jpg', 'M', 'Red', 'Available', 'Men', 1000, 4.6, 15, '["https://i.pinimg.com/1200x/51/0a/cf/510acfb2e0a7f3b536b2a5a45aa4272b.jpg","https://i.pinimg.com/1200x/51/0a/cf/510acfb2e0a7f3b536b2a5a45aa4272b.jpg"]'::jsonb, '["Textured Jacquard Fabric","Single Breasted","Inner Pocket","Modern Fit"]'::jsonb),
    (cat_traditional, 'Blush Pink Embroidered Anarkali', 'Floor-length blush pink georgette Anarkali suit enriched with mirror work border and delicate Chikankari embroidery. Paired with pants and chiffon dupatta.', 1199, 'https://i.pinimg.com/736x/b3/a7/ac/b3a7ac62dcbb247e53faa876fcc40cc2.jpg', 'L', 'Pink', 'Available', 'Women', 1500, 4.8, 22, '["https://i.pinimg.com/736x/b3/a7/ac/b3a7ac62dcbb247e53faa876fcc40cc2.jpg","https://i.pinimg.com/736x/b3/a7/ac/b3a7ac62dcbb247e53faa876fcc40cc2.jpg"]'::jsonb, '["Georgette Base","Mirror Work Details","Lightweight Flared Cut","3-Piece Set"]'::jsonb),
    (cat_formal, 'Navy Blue Double-Breasted Suit', 'Sophisticated navy blue double-breasted suit crafted from wool-touch breathable blend. Versatile choice for corporate galas and formal dinners.', 899, 'https://i.pinimg.com/736x/a2/ed/6f/a2ed6fd88b5282bb0d76086edbd640bb.jpg', 'M', 'Navy', 'Available', 'Men', 1200, 4.7, 18, '["https://i.pinimg.com/736x/a2/ed/6f/a2ed6fd88b5282bb0d76086edbd640bb.jpg","https://i.pinimg.com/736x/a2/ed/6f/a2ed6fd88b5282bb0d76086edbd640bb.jpg"]'::jsonb, '["6-Button Double Breasted","Tapered Trousers","Breathable Fabric","Sharp Silhouette"]'::jsonb),
    (cat_gowns, 'Sequin Rose Gold Ball Gown', 'Stunning rose gold full-sequin gown featuring a deep V-neckline and open back layout. Captures light beautifully from every angle.', 1499, 'https://i.pinimg.com/1200x/d9/ac/14/d9ac1493718e35aa916bd362b561af52.jpg', 'XS', 'Gold', 'Available', 'Women', 2000, 4.9, 37, '["https://i.pinimg.com/1200x/d9/ac/14/d9ac1493718e35aa916bd362b561af52.jpg","https://i.pinimg.com/1200x/d9/ac/14/d9ac1493718e35aa916bd362b561af52.jpg"]'::jsonb, '["All-Over Sequin Embellishment","Fully Lined","Padded Bust","Back Zipper"]'::jsonb),
    (cat_traditional, 'Maroon Indo-Western Achkan', 'Asymmetrical maroon Indo-Western jacket with metallic side buttons and a sleek cowl draped dhoti pant. Blends contemporary trends with heritage elegance.', 1399, 'https://i.pinimg.com/1200x/ac/9d/dd/ac9ddd105c626bceca93566f04eadc2b.jpg', 'L', 'Maroon', 'Available', 'Men', 1800, 4.8, 26, '["https://i.pinimg.com/1200x/ac/9d/dd/ac9ddd105c626bceca93566f04eadc2b.jpg","https://i.pinimg.com/1200x/ac/9d/dd/ac9ddd105c626bceca93566f04eadc2b.jpg"]'::jsonb, '["Asymmetric Silhouette","Includes Dhoti Pants","Rich Silk Brocade","Dry Clean Preferred"]'::jsonb),
    (cat_dresses, 'Satin Wrap Cocktail Dress', 'Lustrous ruby red satin wrap dress. Ultra-flattering fit suitable for birthdays, anniversaries, and parties.', 699, 'https://i.pinimg.com/1200x/9f/be/8b/9fbe8b0c5b3fa3f13e4e958358dba4d1.jpg', 'S', 'Red', 'Rented', 'Women', 900, 4.5, 14, '["https://i.pinimg.com/1200x/9f/be/8b/9fbe8b0c5b3fa3f13e4e958358dba4d1.jpg","https://i.pinimg.com/1200x/9f/be/8b/9fbe8b0c5b3fa3f13e4e958358dba4d1.jpg"]'::jsonb, '["Adjustable Tie Waist","Silky Soft Satin","Long Sleeves","V-Neck Line"]'::jsonb),
    (cat_traditional, 'Royal Blue Embroidered Kurta Set', 'Royal blue raw silk kurta featuring subtle neck embroidery and paired with white churidar pyjama. Comfortable and stylish for festive pujas and sangeet.', 599, 'https://i.pinimg.com/736x/81/b7/fc/81b7fcada9ea5ee539054733d4cd3421.jpg', 'XXL', 'Blue', 'Available', 'Men', 800, 4.6, 17, '["https://i.pinimg.com/736x/81/b7/fc/81b7fcada9ea5ee539054733d4cd3421.jpg","https://i.pinimg.com/736x/81/b7/fc/81b7fcada9ea5ee539054733d4fb.jpg"]'::jsonb, '["Raw Silk Fabric","Thread Embroidery","Includes Pyjama","Comfort Fit"]'::jsonb),
    (cat_party, 'Pastel Mint Floral Organza Saree & Blouse', 'Dreamy mint green organza saree adorned with hand-painted floral motifs and scalloped border embroidery. Includes stitched sequin blouse.', 899, 'https://i.pinimg.com/736x/84/4f/63/844f63fb64d59afc8395a0a52427500b.jpg', 'M', 'White', 'Available', 'Women', 1100, 4.9, 29, '["https://i.pinimg.com/736x/84/4f/63/844f63fb64d59afc8395a0a52427500b.jpg","https://i.pinimg.com/736x/84/4f/63/844f63fb64d59afc8395a0a52427500b.jpg"]'::jsonb, '["Pure Lightweight Organza","Stitched Designer Blouse","Scallop Border","Pre-stitched Option Available"]'::jsonb),
    (cat_formal, 'Minimalist Beige Linen Suit', 'Clean, modern beige linen-blend blazer and trousers tailored for summer weddings, beach ceremonies, and upscale outdoor events.', 799, 'https://i.pinimg.com/1200x/1a/56/1b/1a561b2e5f03ac49a1758ed8bb799a53.jpg', 'L', 'White', 'Available', 'Unisex', 1000, 4.7, 12, '["https://i.pinimg.com/1200x/1a/56/1b/1a561b2e5f03ac49a1758ed8bb799a53.jpg","https://i.pinimg.com/1200x/1a/56/1b/1a561b2e5f03ac49a1758ed8bb799a53.jpg"]'::jsonb, '["Linen Wool Blend","Unstructured Soft Shoulder","Lightweight","Relaxed Modern Cut"]'::jsonb),
    (cat_gowns, 'Velvet Wine Indo-Western Gown', 'Opulent wine velvet gown integrated with an attached embroidered cape drape. Designed to make a grand entry at receptions and red carpet events.', 1599, 'https://i.pinimg.com/736x/5a/a3/49/5aa3493828095ecbe1d80572556aa2ea.jpg', 'XL', 'Velvet Wine', 'Available', 'Women', 2200, 4.9, 33, '["https://i.pinimg.com/736x/5a/a3/49/5aa3493828095ecbe1d80572556aa2ea.jpg","https://i.pinimg.com/736x/5a/a3/49/5aa3493828095ecbe1d80572556aa2ea.jpg"]'::jsonb, '["Micro Velvet Finish","Attached Embroidered Cape","Hidden Zip Back","Luxury Feel"]'::jsonb)
    ON CONFLICT DO NOTHING;
END $$;