/**
 * Luxe Vault - Mock Data Store
 * Brand: Luxe Vault ("Rent Luxury. Define Elegance.")
 * 
 * All clothing records are precisely paired with matching high-resolution fashion imagery
 * and multi-angle photo galleries.
 */

const INITIAL_CLOTHES = [
    {
        id: 1,
        name: "Midnight Velvet Evening Gown",
        category: "Gowns",
        gender: "Women",
        size: "M",
        color: "Navy",
        rentalPrice: 999,
        securityDeposit: 1500,
        availability: "Available",
        rating: 4.9,
        reviewsCount: 28,
        image: "https://i.pinimg.com/736x/74/61/55/746155a95172ce75b150fa36ca25df24.jpg",
        images: [
            "https://i.pinimg.com/736x/74/61/55/746155a95172ce75b150fa36ca25df24.jpg",
            "https://i.pinimg.com/736x/74/61/55/746155a95172ce75b150fa36ca25df24.jpg",
            "https://i.pinimg.com/736x/74/61/55/746155a95172ce75b150fa36ca25df24.jpg"
        ],
        description: "An exquisite midnight navy velvet gown featuring a subtle off-shoulder cut and trailing mermaid silhouette. Perfect for galas, award nights, and high-end formal receptions.",
        features: ["Premium Velvet Fabric", "Dry Clean Only", "Built-in Structure", "Floor Length"]
    },
    {
        id: 2,
        name: "Royal Golden Zardosi Lehenga",
        category: "Lehengas",
        gender: "Women",
        size: "S",
        color: "Gold",
        rentalPrice: 1899,
        securityDeposit: 2500,
        availability: "Available",
        rating: 5.0,
        reviewsCount: 42,
        image: "https://i.pinimg.com/736x/df/62/b7/df62b7616cb2026fcfcc021950bd805b.jpg",
        images: [
            "https://i.pinimg.com/736x/df/62/b7/df62b7616cb2026fcfcc021950bd805b.jpg",
            "https://i.pinimg.com/736x/df/62/b7/df62b7616cb2026fcfcc021950bd805b.jpg",
            "https://i.pinimg.com/736x/df/62/b7/df62b7616cb2026fcfcc021950bd805b.jpg"
        ],
        description: "A breathtaking bridal & festive lehenga handcrafted with intricate gold threadwork, sequins, and zardosi embroidery on a crimson silk background. Comes with custom net dupatta.",
        features: ["Handcrafted Zardosi Work", "Includes Blouse & Dupatta", "Heavy Silk Blend", "Adjustable Waistband"]
    },
    {
        id: 3,
        name: "Classic Charcoal Tuxedo Suit",
        category: "Suits",
        gender: "Men",
        size: "L",
        color: "Black",
        rentalPrice: 1299,
        securityDeposit: 2000,
        availability: "Available",
        rating: 4.8,
        reviewsCount: 35,
        image: "https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg",
        images: [
            "https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg",
            "https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg",
            "https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg"
        ],
        description: "Tailored to perfection, this 3-piece charcoal tuxedo includes a slim-fit satin-lapel jacket, matching trousers, and a sleek waistcoat. Ideal for black-tie affairs and weddings.",
        features: ["3-Piece Tuxedo Set", "Italian Fabric Blend", "Satin Lapel", "Slim Fit"]
    },
    {
        id: 4,
        name: "Emerald Silk Cocktail Dress",
        category: "Dresses",
        gender: "Women",
        size: "M",
        color: "Emerald",
        rentalPrice: 799,
        securityDeposit: 1000,
        availability: "Available",
        rating: 4.7,
        reviewsCount: 19,
        image: "https://i.pinimg.com/1200x/e7/b0/e5/e7b0e5b152e1ec724fb881836403171e.jpg",
        images: [
            "https://i.pinimg.com/1200x/e7/b0/e5/e7b0e5b152e1ec724fb881836403171e.jpg",
            "https://i.pinimg.com/1200x/e7/b0/e5/e7b0e5b152e1ec724fb881836403171e.jpg"
        ],
        description: "Vibrant emerald green cocktail dress with draped front detailing and a contemporary asymmetric hemline. Sleek, comfortable, and eye-catching for evening parties.",
        features: ["100% Pure Silk Feel", "Side Concealed Zipper", "Mid-length Hem", "Wrinkle Resistant"]
    },
    {
        id: 5,
        name: "Ivory & Gold Designer Sherwani",
        category: "Sherwanis",
        gender: "Men",
        size: "XL",
        color: "White",
        rentalPrice: 1699,
        securityDeposit: 2200,
        availability: "Rented",
        rating: 4.9,
        reviewsCount: 31,
        image: "https://i.pinimg.com/1200x/21/dd/ba/21ddba37d07466dad83b640c6c5974fb.jpg",
        images: [
            "https://i.pinimg.com/1200x/21/dd/ba/21ddba37d07466dad83b640c6c5974fb.jpg",
            "https://i.pinimg.com/1200x/21/dd/ba/21ddba37d07466dad83b640c6c5974fb.jpg"
        ],
        description: "Regal ivory sherwani embellished with fine resham and antique gold motif embroidery. Accompanied by silk churidar and matching designer stole.",
        features: ["Includes Churidar & Stole", "Mandarin Collar", "Embroidered Buttons", "Royal Finish"]
    },
    {
        id: 6,
        name: "Scarlet Red Party Blazer",
        category: "Party Wear",
        gender: "Men",
        size: "M",
        color: "Red",
        rentalPrice: 699,
        securityDeposit: 1000,
        availability: "Available",
        rating: 4.6,
        reviewsCount: 15,
        image: "https://i.pinimg.com/1200x/51/0a/cf/510acfb2e0a7f3b536b2a5a45aa4272b.jpg",
        images: [
            "https://i.pinimg.com/1200x/51/0a/cf/510acfb2e0a7f3b536b2a5a45aa4272b.jpg",
            "https://i.pinimg.com/1200x/51/0a/cf/510acfb2e0a7f3b536b2a5a45aa4272b.jpg"
        ],
        description: "Bold scarlet red textured party blazer with contrast velvet piping on shoulders and lapel. Perfect for cocktail receptions and sangeet night celebrations.",
        features: ["Textured Jacquard Fabric", "Single Breasted", "Inner Pocket", "Modern Fit"]
    },
    {
        id: 7,
        name: "Blush Pink Embroidered Anarkali",
        category: "Traditional Wear",
        gender: "Women",
        size: "L",
        color: "Pink",
        rentalPrice: 1199,
        securityDeposit: 1500,
        availability: "Available",
        rating: 4.8,
        reviewsCount: 22,
        image: "https://i.pinimg.com/736x/b3/a7/ac/b3a7ac62dcbb247e53faa876fcc40cc2.jpg",
        images: [
            "https://i.pinimg.com/736x/b3/a7/ac/b3a7ac62dcbb247e53faa876fcc40cc2.jpg",
            "https://i.pinimg.com/736x/b3/a7/ac/b3a7ac62dcbb247e53faa876fcc40cc2.jpg"
        ],
        description: "Floor-length blush pink georgette Anarkali suit enriched with mirror work border and delicate Chikankari embroidery. Paired with pants and chiffon dupatta.",
        features: ["Georgette Base", "Mirror Work Details", "Lightweight Flared Cut", "3-Piece Set"]
    },
    {
        id: 8,
        name: "Navy Blue Double-Breasted Suit",
        category: "Formal Wear",
        gender: "Men",
        size: "M",
        color: "Navy",
        rentalPrice: 899,
        securityDeposit: 1200,
        availability: "Available",
        rating: 4.7,
        reviewsCount: 18,
        image: "https://i.pinimg.com/736x/a2/ed/6f/a2ed6fd88b5282bb0d76086edbd640bb.jpg",
        images: [
            "https://i.pinimg.com/736x/a2/ed/6f/a2ed6fd88b5282bb0d76086edbd640bb.jpg",
            "https://i.pinimg.com/736x/a2/ed/6f/a2ed6fd88b5282bb0d76086edbd640bb.jpg"
        ],
        description: "Sophisticated navy blue double-breasted suit crafted from wool-touch breathable blend. Versatile choice for corporate galas and formal dinners.",
        features: ["6-Button Double Breasted", "Tapered Trousers", "Breathable Fabric", "Sharp Silhouette"]
    },
    {
        id: 9,
        name: "Sequin Rose Gold Ball Gown",
        category: "Gowns",
        gender: "Women",
        size: "XS",
        color: "Gold",
        rentalPrice: 1499,
        securityDeposit: 2000,
        availability: "Available",
        rating: 4.9,
        reviewsCount: 37,
        image: "https://i.pinimg.com/1200x/d9/ac/14/d9ac1493718e35aa916bd362b561af52.jpg",
        images: [
            "https://i.pinimg.com/1200x/d9/ac/14/d9ac1493718e35aa916bd362b561af52.jpg",
            "https://i.pinimg.com/1200x/d9/ac/14/d9ac1493718e35aa916bd362b561af52.jpg"
        ],
        description: "Stunning rose gold full-sequin gown featuring a deep V-neckline and open back layout. Captures light beautifully from every angle.",
        features: ["All-Over Sequin Embellishment", "Fully Lined", "Padded Bust", "Back Zipper"]
    },
    {
        id: 10,
        name: "Maroon Indo-Western Achkan",
        category: "Traditional Wear",
        gender: "Men",
        size: "L",
        color: "Maroon",
        rentalPrice: 1399,
        securityDeposit: 1800,
        availability: "Available",
        rating: 4.8,
        reviewsCount: 26,
        image: "https://i.pinimg.com/1200x/ac/9d/dd/ac9ddd105c626bceca93566f04eadc2b.jpg",
        images: [
            "https://i.pinimg.com/1200x/ac/9d/dd/ac9ddd105c626bceca93566f04eadc2b.jpg",
            "https://i.pinimg.com/1200x/ac/9d/dd/ac9ddd105c626bceca93566f04eadc2b.jpg"
        ],
        description: "Asymmetrical maroon Indo-Western jacket with metallic side buttons and a sleek cowl draped dhoti pant. Blends contemporary trends with heritage elegance.",
        features: ["Asymmetric Silhouette", "Includes Dhoti Pants", "Rich Silk Brocade", "Dry Clean Preferred"]
    },
    {
        id: 11,
        name: "Satin Wrap Cocktail Dress",
        category: "Dresses",
        gender: "Women",
        size: "S",
        color: "Red",
        rentalPrice: 699,
        securityDeposit: 900,
        availability: "Rented",
        rating: 4.5,
        reviewsCount: 14,
        image: "https://i.pinimg.com/1200x/9f/be/8b/9fbe8b0c5b3fa3f13e4e958358dba4d1.jpg",
        images: [
            "https://i.pinimg.com/1200x/9f/be/8b/9fbe8b0c5b3fa3f13e4e958358dba4d1.jpg",
            "https://i.pinimg.com/1200x/9f/be/8b/9fbe8b0c5b3fa3f13e4e958358dba4d1.jpg"
        ],
        description: "Lustrous ruby red satin wrap dress . Ultra-flattering fit suitable for birthdays, anniversaries, and parties.",
        features: ["Adjustable Tie Waist", "Silky Soft Satin", "Long Sleeves", "V-Neck Line"]
    },
    {
        id: 12,
        name: "Royal Blue Embroidered Kurta Set",
        category: "Traditional Wear",
        gender: "Men",
        size: "XXL",
        color: "Blue",
        rentalPrice: 599,
        securityDeposit: 800,
        availability: "Available",
        rating: 4.6,
        reviewsCount: 17,
        image: "https://i.pinimg.com/736x/81/b7/fc/81b7fcada9ea5ee539054733d4cd3421.jpg",
        images: [
            "https://i.pinimg.com/736x/81/b7/fc/81b7fcada9ea5ee539054733d4cd3421.jpg",
            "https://i.pinimg.com/736x/81/b7/fc/81b7fcada9ea5ee539054733d4cd3421.jpg"
        ],
        description: "Royal blue raw silk kurta featuring subtle neck embroidery and paired with white churidar pyjama. Comfortable and stylish for festive pujas and sangeet.",
        features: ["Raw Silk Fabric", "Thread Embroidery", "Includes Pyjama", "Comfort Fit"]
    },
    {
        id: 13,
        name: "Pastel Mint Floral Organza Saree & Blouse",
        category: "Party Wear",
        gender: "Women",
        size: "M",
        color: "White",
        rentalPrice: 899,
        securityDeposit: 1100,
        availability: "Available",
        rating: 4.9,
        reviewsCount: 29,
        image: "https://i.pinimg.com/736x/84/4f/63/844f63fb64d59afc8395a0a52427500b.jpg",
        images: [
            "https://i.pinimg.com/736x/84/4f/63/844f63fb64d59afc8395a0a52427500b.jpg",
            "https://i.pinimg.com/736x/84/4f/63/844f63fb64d59afc8395a0a52427500b.jpg"
        ],
        description: "Dreamy mint green organza saree adorned with hand-painted floral motifs and scalloped border embroidery. Includes stitched sequin blouse.",
        features: ["Pure Lightweight Organza", "Stitched Designer Blouse", "Scallop Border", "Pre-stitched Option Available"]
    },
    {
        id: 14,
        name: "Minimalist Beige Linen Suit",
        category: "Formal Wear",
        gender: "Unisex",
        size: "L",
        color: "White",
        rentalPrice: 799,
        securityDeposit: 1000,
        availability: "Available",
        rating: 4.7,
        reviewsCount: 12,
        image: "https://i.pinimg.com/1200x/1a/56/1b/1a561b2e5f03ac49a1758ed8bb799a53.jpg",
        images: [
            "https://i.pinimg.com/1200x/1a/56/1b/1a561b2e5f03ac49a1758ed8bb799a53.jpg",
            "https://i.pinimg.com/1200x/1a/56/1b/1a561b2e5f03ac49a1758ed8bb799a53.jpg"
        ],
        description: "Clean, modern beige linen-blend blazer and trousers tailored for summer weddings, beach ceremonies, and upscale outdoor events.",
        features: ["Linen Wool Blend", "Unstructured Soft Shoulder", "Lightweight", "Relaxed Modern Cut"]
    },
    {
        id: 15,
        name: "Velvet Wine Indo-Western Gown",
        category: "Gowns",
        gender: "Women",
        size: "XL",
        color: "Velvet Wine",
        rentalPrice: 1599,
        securityDeposit: 2200,
        availability: "Available",
        rating: 4.9,
        reviewsCount: 33,
        image: "https://i.pinimg.com/736x/5a/a3/49/5aa3493828095ecbe1d80572556aa2ea.jpg",
        images: [
            "https://i.pinimg.com/736x/5a/a3/49/5aa3493828095ecbe1d80572556aa2ea.jpg",
            "https://i.pinimg.com/736x/5a/a3/49/5aa3493828095ecbe1d80572556aa2ea.jpg"
        ],
        description: "Opulent wine velvet gown integrated with an attached embroidered cape drape. Designed to make a grand entry at receptions and red carpet events.",
        features: ["Micro Velvet Finish", "Attached Embroidered Cape", "Hidden Zip Back", "Luxury Feel"]
    }
];

const INITIAL_CATEGORIES = [
    { id: "dresses", name: "Dresses", icon: "👗", count: 2 },
    { id: "suits", name: "Suits", icon: "👔", count: 2 },
    { id: "lehengas", name: "Lehengas", icon: "🥻", count: 1 },
    { id: "sherwanis", name: "Sherwanis", icon: "🧥", count: 1 },
    { id: "gowns", name: "Gowns", icon: "✨", count: 3 },
    { id: "formal-wear", name: "Formal Wear", icon: "💼", count: 2 },
    { id: "party-wear", name: "Party Wear", icon: "🎉", count: 2 },
    { id: "traditional-wear", name: "Traditional Wear", icon: "🌟", count: 3 }
];

const INITIAL_RENTALS = [
    {
        id: "RNT-1001",
        clothingId: 5,
        clothingName: "Ivory & Gold Designer Sherwani",
        clothingImage: "https://i.pinimg.com/1200x/21/dd/ba/21ddba37d07466dad83b640c6c5974fb.jpg",
        customerName: "Aarav Sharma",
        customerEmail: "aarav@example.com",
        customerPhone: "+91 98765 43210",
        startDate: "2026-09-12",
        returnDate: "2026-09-15",
        rentalDays: 3,
        dailyRate: 1699,
        rentalCost: 5097,
        securityDeposit: 2200,
        totalAmount: 7297,
        rentalStatus: "Confirmed",
        paymentStatus: "Paid",
        createdAt: "2026-09-08"
    },
    {
        id: "RNT-1002",
        clothingId: 11,
        clothingName: "Satin Wrap Cocktail Dress",
        clothingImage: "https://i.pinimg.com/1200x/9f/be/8b/9fbe8b0c5b3fa3f13e4e958358dba4d1.jpg",
        customerName: "Ananya Roy",
        customerEmail: "ananya@example.com",
        customerPhone: "+91 91234 56789",
        startDate: "2026-09-05",
        returnDate: "2026-09-07",
        rentalDays: 2,
        dailyRate: 699,
        rentalCost: 1398,
        securityDeposit: 900,
        totalAmount: 2298,
        rentalStatus: "Active",
        paymentStatus: "Paid",
        createdAt: "2026-09-02"
    },
    {
        id: "RNT-1003",
        clothingId: 3,
        clothingName: "Classic Charcoal Tuxedo Suit",
        clothingImage: "https://i.pinimg.com/736x/6a/fa/8c/6afa8c474450e9bc544ec3192413de7b.jpg",
        customerName: "Rohan Kapoor",
        customerEmail: "rohan@example.com",
        customerPhone: "+91 99887 76655",
        startDate: "2026-08-20",
        returnDate: "2026-08-23",
        rentalDays: 3,
        dailyRate: 1299,
        rentalCost: 3897,
        securityDeposit: 2000,
        totalAmount: 5897,
        rentalStatus: "Returned",
        paymentStatus: "Paid",
        createdAt: "2026-08-15"
    }
];

const INITIAL_CUSTOMERS = [
    {
        id: "CUST-501",
        name: "Aarav Sharma",
        email: "aarav@example.com",
        phone: "+91 98765 43210",
        address: "42 MG Road, Indiranagar, Bengaluru, Karnataka",
        joinedDate: "2026-01-15",
        status: "Active",
        totalRentals: 4
    },
    {
        id: "CUST-502",
        name: "Ananya Roy",
        email: "ananya@example.com",
        phone: "+91 91234 56789",
        address: "712 Marine Drive, Nariman Point, Mumbai, Maharashtra",
        joinedDate: "2026-03-10",
        status: "Active",
        totalRentals: 2
    },
    {
        id: "CUST-503",
        name: "Rohan Kapoor",
        email: "rohan@example.com",
        phone: "+91 99887 76655",
        address: "15 Connaught Place, New Delhi",
        joinedDate: "2026-05-22",
        status: "Active",
        totalRentals: 6
    },
    {
        id: "CUST-504",
        name: "Priya Patel",
        email: "priya@example.com",
        phone: "+91 98989 89898",
        address: "88 SG Highway, Ahmedabad, Gujarat",
        joinedDate: "2026-07-04",
        status: "Active",
        totalRentals: 1
    }
];

const INITIAL_PAYMENTS = [
    {
        id: "PAY-9001",
        rentalId: "RNT-1001",
        customerName: "Aarav Sharma",
        amount: 7297,
        paymentMethod: "UPI / GPay",
        paymentStatus: "Completed",
        transactionId: "TXN_UPI_88712399",
        date: "2026-09-08"
    },
    {
        id: "PAY-9002",
        rentalId: "RNT-1002",
        customerName: "Ananya Roy",
        amount: 2298,
        paymentMethod: "Credit Card",
        paymentStatus: "Completed",
        transactionId: "TXN_CARD_5541992",
        date: "2026-09-02"
    },
    {
        id: "PAY-9003",
        rentalId: "RNT-1003",
        customerName: "Rohan Kapoor",
        amount: 5897,
        paymentMethod: "Net Banking",
        paymentStatus: "Completed",
        transactionId: "TXN_NB_9931842",
        date: "2026-08-15"
    }
];

// Attach to global scope for universal accessibility
if (typeof window !== "undefined") {
    window.INITIAL_CLOTHES = INITIAL_CLOTHES;
    window.INITIAL_CATEGORIES = INITIAL_CATEGORIES;
    window.INITIAL_RENTALS = INITIAL_RENTALS;
    window.INITIAL_CUSTOMERS = INITIAL_CUSTOMERS;
    window.INITIAL_PAYMENTS = INITIAL_PAYMENTS;
} else if (typeof globalThis !== "undefined") {
    globalThis.INITIAL_CLOTHES = INITIAL_CLOTHES;
    globalThis.INITIAL_CATEGORIES = INITIAL_CATEGORIES;
    globalThis.INITIAL_RENTALS = INITIAL_RENTALS;
    globalThis.INITIAL_CUSTOMERS = INITIAL_CUSTOMERS;
    globalThis.INITIAL_PAYMENTS = INITIAL_PAYMENTS;
}

// Seed localStorage & force sync updated data
(function initializeLocalStorage() {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("luxevault_clothes", JSON.stringify(INITIAL_CLOTHES));
        if (!localStorage.getItem("luxevault_rentals")) {
            localStorage.setItem("luxevault_rentals", JSON.stringify(INITIAL_RENTALS));
        }
        if (!localStorage.getItem("luxevault_customers")) {
            localStorage.setItem("luxevault_customers", JSON.stringify(INITIAL_CUSTOMERS));
        }
        if (!localStorage.getItem("luxevault_payments")) {
            localStorage.setItem("luxevault_payments", JSON.stringify(INITIAL_PAYMENTS));
        }
    }
})();
