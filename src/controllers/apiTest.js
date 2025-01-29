const User = require('../models/user');

const apiTest = async (request, response) => {
  try {
    // Create a test user
    const testUser = new User({
      firstName: "Test",
      lastName: "User",
      mobileNumber: "9876543210",
      farmName: "Test Farm",
      state: "Maharashtra",
      district: "Mumbai",
      taluka: "Mumbai",
      village: "Test Village",
      pinCode: 400001,
      cowCount: 5,
      buffaloCount: 3
    });

    // Save the test user
    await testUser.save();

    // Retrieve all users
    const allUsers = await User.find();

    response.status(200).json({
      message: "Test data added successfully",
      testUser: testUser,
      allUsers: allUsers
    });
  } catch (error) {
    console.error('Error in API test:', error);
    response.status(500).json({
      error: error.message,
      details: error
    });
  }
};

module.exports = apiTest;