const Appeal = require('../../api/notes/appeal.model')

const AppleaRepository = {
    createA: async (appeal, number ) => {
      try {
       
        const newNote4 = new Appeal({
          appeal,
          number,
          
        });

        await newNote4.save();
  
        return { success: true, message: 'Note created successfully!' };
      } catch (error) {
        console.error('Error creating note:', error.message);
        return { success: false, message: 'Internal server error' };
      }
    },
  };
  
  module.exports = AppleaRepository;