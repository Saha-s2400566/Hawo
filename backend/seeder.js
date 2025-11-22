const { sequelize, User, Staff, Service, Booking, Review } = require('./models');

const seedData = async () => {
    try {
        // Sync all models including associations
        await sequelize.sync({ force: true });
        console.log('Database synced!');

        // Create Admin User
        const admin = await User.create({
            name: 'Admin User',
            email: 'admin@hawo.com',
            password: 'password123',
            role: 'admin',
            phone: '1234567890'
        });
        console.log('Admin created');

        // Create Staff Members
        const staff1 = await Staff.create({
            name: 'Sarah Johnson',
            email: 'sarah@hawo.com',
            phone: '555-0101',
            specialization: 'Hair Stylist',
            bio: 'Expert in modern cuts and coloring with 10 years of experience.',
            imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
        });

        const staff2 = await Staff.create({
            name: 'Michael Chen',
            email: 'michael@hawo.com',
            phone: '555-0102',
            specialization: 'Massage Therapist',
            bio: 'Certified massage therapist specializing in deep tissue and swedish massage.',
            imageUrl: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80'
        });
        console.log('Staff created');

        // Create Services
        await Service.bulkCreate([
            {
                name: 'Hair Styling',
                description: 'Professional hair styling services for all hair types. Includes wash, cut, and style.',
                price: 50.00,
                duration: 60,
                category: 'Hair',
                imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
            },
            {
                name: 'Facial Treatment',
                description: 'Rejuvenating facial treatments to cleanse, exfoliate, and nourish your skin.',
                price: 80.00,
                duration: 45,
                category: 'Face',
                imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
            },
            {
                name: 'Massage Therapy',
                description: 'Relaxing full-body massage to relieve stress and muscle tension.',
                price: 100.00,
                duration: 60,
                category: 'Body',
                imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
            },
            {
                name: 'Manicure & Pedicure',
                description: 'Complete nail care services including shaping, cuticle care, and polish.',
                price: 45.00,
                duration: 90,
                category: 'Nails',
                imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
            }
        ]);
        console.log('Services created');

        console.log('Seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
