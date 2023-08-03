import { createSlice } from '@reduxjs/toolkit';

 

const testimonialReducer = createSlice({

  name: 'testimonials',

  initialState: [

    {
        id: 1,
        name: 'Eaukage',
        role: 'Web Developer',
        content: 'Étudiant sérieux, travailleur, social, ambitieux et passionné de l informatique. Je lerecommande très fortement à tous',
        rating: 4.5
      },
      {
        id: 2,
        name: 'Naruto',
        role: 'Graphic Designer',
        content: ' La valeur n attend point le nombre des années  Cheikh matérialise parfaitement cette citation. Vif et Créatif il perçoit rapidement les besoins dun client',
        rating: 5
      },
      {
        id: 3,
        name: 'Sasuke',
        role: 'Marketing Specialist',
        content: 'J ai été particulièrement impressionné par sa capacité de sortir de l ordinaire et de donner une autre dimension a un projet.',
        rating: 4
      },

  ],
  reducers: {

    addTestimonial: (state, action) => {

      state.push(action.payload);

    },

    deleteTestimonial: (state, action) => {

      return state.filter((testimonial) => testimonial.id !== action.payload);

    },

    updateTestimonial: (state, action) => {

      const { id, name, role, content, rating } = action.payload;

      const index = state.findIndex((testimonial) => testimonial.id === id);

      if (index !== -1) {

        state[index].name = name;
        state[index].role = role;
        state[index].content = content;
        state[index].rating = rating;

      }

    },

  },

});

 

export const { addTestimonial, deleteTestimonial, updateTestimonial } = testimonialReducer.actions;

export default testimonialReducer.reducer;