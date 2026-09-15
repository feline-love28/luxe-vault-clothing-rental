/**
 * Luxe Vault - API Service Abstraction Layer
 * Brand: Luxe Vault ("Rent Luxury. Define Elegance.")
 */

const USE_MOCK_API = true;
const LATENCY_MS = 200;

function delay(ms = LATENCY_MS) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apiService = {
    // -------------------------------------------------------------
    // AUTHENTICATION APIs
    // -------------------------------------------------------------
    auth: {
        async login(email, password) {
            await delay();
            const customers = JSON.parse(localStorage.getItem("luxevault_customers") || "[]");
            
            // Check admin hardcoded mock
            if ((email === "admin@luxevault.com" || email === "admin@rentwear.com") && password === "admin123") {
                const adminUser = {
                    id: "ADMIN-001",
                    name: "System Administrator",
                    email: "admin@luxevault.com",
                    role: "admin"
                };
                localStorage.setItem("luxevault_current_user", JSON.stringify(adminUser));
                return { success: true, user: adminUser, token: "mock-jwt-admin-token" };
            }

            // Check customer
            const user = customers.find(c => c.email.toLowerCase() === email.toLowerCase());
            if (user && password.length >= 6) {
                const authUser = { ...user, role: "customer" };
                localStorage.setItem("luxevault_current_user", JSON.stringify(authUser));
                return { success: true, user: authUser, token: "mock-jwt-customer-token" };
            }

            // Fallback for new demo logins
            if (password.length >= 6) {
                const newUser = {
                    id: "CUST-" + Math.floor(100 + Math.random() * 900),
                    name: email.split("@")[0].replace(".", " "),
                    email: email,
                    phone: "+91 98765 00000",
                    address: "Sample Delivery Address",
                    joinedDate: new Date().toISOString().split("T")[0],
                    status: "Active",
                    role: "customer"
                };
                customers.push(newUser);
                localStorage.setItem("luxevault_customers", JSON.stringify(customers));
                localStorage.setItem("luxevault_current_user", JSON.stringify(newUser));
                return { success: true, user: newUser, token: "mock-jwt-customer-token" };
            }

            throw new Error("Invalid email or password. Password must be at least 6 characters.");
        },

        async register(userData) {
            await delay();
            const customers = JSON.parse(localStorage.getItem("luxevault_customers") || "[]");
            
            const existing = customers.find(c => c.email.toLowerCase() === userData.email.toLowerCase());
            if (existing) {
                throw new Error("An account with this email address already exists.");
            }

            const newUser = {
                id: "CUST-" + Math.floor(100 + Math.random() * 900),
                name: userData.fullName,
                email: userData.email,
                phone: userData.phone,
                address: userData.address || "",
                joinedDate: new Date().toISOString().split("T")[0],
                status: "Active",
                totalRentals: 0,
                role: "customer"
            };

            customers.push(newUser);
            localStorage.setItem("luxevault_customers", JSON.stringify(customers));
            localStorage.setItem("luxevault_current_user", JSON.stringify(newUser));

            return { success: true, user: newUser, message: "Welcome to Luxe Vault! Account created successfully." };
        },

        async getCurrentUser() {
            await delay(50);
            const userStr = localStorage.getItem("luxevault_current_user");
            return userStr ? JSON.parse(userStr) : null;
        },

        async logout() {
            await delay(50);
            localStorage.removeItem("luxevault_current_user");
            return { success: true };
        },

        async updateProfile(profileData) {
            await delay();
            const currentUser = await this.getCurrentUser();
            if (!currentUser) throw new Error("Not authenticated");

            const customers = JSON.parse(localStorage.getItem("luxevault_customers") || "[]");
            const index = customers.findIndex(c => c.id === currentUser.id);

            const updatedUser = { ...currentUser, ...profileData };
            if (index !== -1) {
                customers[index] = updatedUser;
                localStorage.setItem("luxevault_customers", JSON.stringify(customers));
            }
            localStorage.setItem("luxevault_current_user", JSON.stringify(updatedUser));

            return { success: true, user: updatedUser };
        }
    },

    // -------------------------------------------------------------
    // CLOTHES CATALOG APIs
    // -------------------------------------------------------------
    clothes: {
        async getAll(filters = {}) {
            await delay();
            let items = JSON.parse(localStorage.getItem("luxevault_clothes") || "[]");

            if (filters.search) {
                const q = filters.search.toLowerCase().trim();
                items = items.filter(item => 
                    item.name.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q) ||
                    item.color.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q)
                );
            }

            if (filters.category && filters.category !== "all") {
                items = items.filter(item => item.category.toLowerCase() === filters.category.toLowerCase());
            }

            if (filters.size && filters.size !== "all") {
                items = items.filter(item => item.size.toUpperCase() === filters.size.toUpperCase());
            }

            if (filters.gender && filters.gender !== "all") {
                items = items.filter(item => 
                    item.gender.toLowerCase() === filters.gender.toLowerCase() || 
                    item.gender.toLowerCase() === "unisex"
                );
            }

            if (filters.color && filters.color !== "all") {
                items = items.filter(item => item.color.toLowerCase() === filters.color.toLowerCase());
            }

            if (filters.availability && filters.availability !== "all") {
                items = items.filter(item => item.availability.toLowerCase() === filters.availability.toLowerCase());
            }

            if (filters.maxPrice) {
                items = items.filter(item => item.rentalPrice <= Number(filters.maxPrice));
            }

            if (filters.sortBy) {
                switch (filters.sortBy) {
                    case "price-low":
                        items.sort((a, b) => a.rentalPrice - b.rentalPrice);
                        break;
                    case "price-high":
                        items.sort((a, b) => b.rentalPrice - a.rentalPrice);
                        break;
                    case "name-az":
                        items.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case "name-za":
                        items.sort((a, b) => b.name.localeCompare(a.name));
                        break;
                    case "rating":
                        items.sort((a, b) => b.rating - a.rating);
                        break;
                    default:
                        break;
                }
            }

            return items;
        },

        async getById(id) {
            await delay();
            const items = JSON.parse(localStorage.getItem("luxevault_clothes") || "[]");
            const item = items.find(i => String(i.id) === String(id));
            if (!item) throw new Error(`Clothing item with ID ${id} not found.`);
            return item;
        }
    },

    // -------------------------------------------------------------
    // RENTALS APIs
    // -------------------------------------------------------------
    rentals: {
        async create(rentalData) {
            await delay();
            const rentals = JSON.parse(localStorage.getItem("luxevault_rentals") || "[]");
            
            const newRental = {
                id: "RNT-" + (1000 + rentals.length + 1),
                clothingId: rentalData.clothingId,
                clothingName: rentalData.clothingName,
                clothingImage: rentalData.clothingImage,
                customerName: rentalData.customerName,
                customerEmail: rentalData.customerEmail,
                customerPhone: rentalData.customerPhone,
                startDate: rentalData.startDate,
                returnDate: rentalData.returnDate,
                rentalDays: rentalData.rentalDays,
                dailyRate: rentalData.dailyRate,
                rentalCost: rentalData.rentalCost,
                securityDeposit: rentalData.securityDeposit,
                totalAmount: rentalData.totalAmount,
                rentalStatus: "Confirmed",
                paymentStatus: "Paid",
                createdAt: new Date().toISOString().split("T")[0]
            };

            rentals.unshift(newRental);
            localStorage.setItem("luxevault_rentals", JSON.stringify(rentals));

            return { success: true, rental: newRental };
        },

        async getUserRentals(userEmail) {
            await delay();
            const rentals = JSON.parse(localStorage.getItem("luxevault_rentals") || "[]");
            if (!userEmail) return rentals;
            return rentals.filter(r => r.customerEmail.toLowerCase() === userEmail.toLowerCase());
        },

        async getById(id) {
            await delay();
            const rentals = JSON.parse(localStorage.getItem("luxevault_rentals") || "[]");
            const rental = rentals.find(r => String(r.id) === String(id));
            if (!rental) throw new Error("Rental record not found.");
            return rental;
        }
    },

    // -------------------------------------------------------------
    // PAYMENTS APIs
    // -------------------------------------------------------------
    payments: {
        async processPayment(paymentDetails) {
            await delay();
            const payments = JSON.parse(localStorage.getItem("luxevault_payments") || "[]");
            
            const newPayment = {
                id: "PAY-" + (9000 + payments.length + 1),
                rentalId: paymentDetails.rentalId,
                customerName: paymentDetails.customerName,
                amount: paymentDetails.amount,
                paymentMethod: paymentDetails.paymentMethod,
                paymentStatus: "Completed",
                transactionId: "TXN_" + Math.random().toString(36).substr(2, 9).toUpperCase(),
                date: new Date().toISOString().split("T")[0]
            };

            payments.unshift(newPayment);
            localStorage.setItem("luxevault_payments", JSON.stringify(payments));

            return { success: true, payment: newPayment };
        }
    },

    // -------------------------------------------------------------
    // ADMIN APIs
    // -------------------------------------------------------------
    admin: {
        async getDashboardStats() {
            await delay();
            const clothes = JSON.parse(localStorage.getItem("luxevault_clothes") || "[]");
            const customers = JSON.parse(localStorage.getItem("luxevault_customers") || "[]");
            const rentals = JSON.parse(localStorage.getItem("luxevault_rentals") || "[]");
            const payments = JSON.parse(localStorage.getItem("luxevault_payments") || "[]");

            const totalRevenue = payments.reduce((sum, p) => sum + (p.amount || 0), 0);
            const activeRentals = rentals.filter(r => r.rentalStatus === "Active" || r.rentalStatus === "Confirmed").length;
            const completedRentals = rentals.filter(r => r.rentalStatus === "Returned").length;
            const availableClothes = clothes.filter(c => c.availability === "Available").length;

            return {
                totalCustomers: customers.length,
                totalClothes: clothes.length,
                availableClothes: availableClothes,
                activeRentals: activeRentals,
                completedRentals: completedRentals,
                totalRevenue: totalRevenue
            };
        },

        async addClothing(itemData) {
            await delay();
            const clothes = JSON.parse(localStorage.getItem("luxevault_clothes") || "[]");
            const newItem = {
                id: Date.now(),
                ...itemData,
                rating: 5.0,
                reviewsCount: 0,
                image: itemData.image || "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
            };
            clothes.unshift(newItem);
            localStorage.setItem("luxevault_clothes", JSON.stringify(clothes));
            return newItem;
        },

        async updateClothing(id, itemData) {
            await delay();
            const clothes = JSON.parse(localStorage.getItem("luxevault_clothes") || "[]");
            const idx = clothes.findIndex(c => String(c.id) === String(id));
            if (idx === -1) throw new Error("Item not found");
            clothes[idx] = { ...clothes[idx], ...itemData };
            localStorage.setItem("luxevault_clothes", JSON.stringify(clothes));
            return clothes[idx];
        },

        async deleteClothing(id) {
            await delay();
            let clothes = JSON.parse(localStorage.getItem("luxevault_clothes") || "[]");
            clothes = clothes.filter(c => String(c.id) !== String(id));
            localStorage.setItem("luxevault_clothes", JSON.stringify(clothes));
            return { success: true };
        },

        async updateRentalStatus(rentalId, status) {
            await delay();
            const rentals = JSON.parse(localStorage.getItem("luxevault_rentals") || "[]");
            const idx = rentals.findIndex(r => String(r.id) === String(rentalId));
            if (idx !== -1) {
                rentals[idx].rentalStatus = status;
                localStorage.setItem("luxevault_rentals", JSON.stringify(rentals));

                if (status === "Returned") {
                    const clothes = JSON.parse(localStorage.getItem("luxevault_clothes") || "[]");
                    const cIdx = clothes.findIndex(c => String(c.id) === String(rentals[idx].clothingId));
                    if (cIdx !== -1) {
                        clothes[cIdx].availability = "Available";
                        localStorage.setItem("luxevault_clothes", JSON.stringify(clothes));
                    }
                }
            }
            return { success: true };
        }
    }
};

if (typeof window !== "undefined") {
    window.apiService = apiService;
} else if (typeof globalThis !== "undefined") {
    globalThis.apiService = apiService;
}
