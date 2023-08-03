'use client' // Add this line to mark this file as a Client Component
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTestimonial, deleteTestimonial, updateTestimonial } from '@/store/testimonialReducer';

function Testimonial() {
  const testimonials = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    content: '',
    rating: 0
  });

  const [editingTestimonialId, setEditingTestimonialId] = useState(null);

  const handleInputChange = (e) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value
    });
  };

  const addNewTestimonial = () => {
    if (newTestimonial.name === '' || newTestimonial.role === '' || newTestimonial.content === '' || newTestimonial.rating === 0) {
      alert('Veuillez remplir tous les champs avant d\'ajouter un témoignage.');
      return;
    }

    dispatch(addTestimonial({
      id: testimonials.length + 1,
      ...newTestimonial
    }));

    setNewTestimonial({ name: '', role: '', content: '', rating: 0 });
  };

  const deleteTestimonialById = (id) => {
    dispatch(deleteTestimonial(id));
  };

  const editTestimonial = (id) => {
    setEditingTestimonialId(id);
    const testimonial = testimonials.find((t) => t.id === id);
    setNewTestimonial({ name: testimonial.name, role: testimonial.role, content: testimonial.content, rating: testimonial.rating });
  };

  const updateTestimonialHandler = () => {
    if (newTestimonial.name === '' || newTestimonial.role === '' || newTestimonial.content === '' || newTestimonial.rating === 0) {
      alert("Veuillez remplir tous les champs avant de mettre à jour le témoignage.");
      return;
    }

    dispatch(updateTestimonial({
      id: editingTestimonialId,
      ...newTestimonial,
    }));

    setEditingTestimonialId(null);
    setNewTestimonial({ name: '', role: '', content: '', rating: 0 });
  };
   
   

  return (
    <section>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-10 col-xl-8 text-center mt-5">
          <h3 className="mb-4 ">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          Les expériences de nos clients satisfaits. Cette page est dédiée aux retours et aux témoignages de nos clients qui ont utilisé nos services ou produits. 
          Découvrez leurs avis authentiques et leurs histoires inspirantes</p>
        </div>
      </div>

      <div className="row text-center justify-content-center">
        {testimonials.map((testimonial) => (
          <div className="col-md-3 mb-4 aligner" key={testimonial.id}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center mb-4">
               
                </div>
                <h5 className="card-title mb-3">{testimonial.name}</h5>
                <h6 className="card-subtitle text-primary mb-3">{testimonial.role}</h6>
                <p className="card-text px-xl-3">{testimonial.content}</p>
                <ul className="list-unstyled d-flex justify-content-center mb-0">
                  {[...Array(Math.floor(testimonial.rating))].map((_, index) => (
                    <li key={index}>
                      <i className="fas fa-star fa-sm text-warning testimonial-icon"></i>
                    </li>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <li>
                      <i className="fas fa-star-half-alt fa-sm text-warning testimonial-icon"></i>
                    </li>
                  )}
                </ul>
                <div className="mt-3">
                  <button onClick={() => editTestimonial(testimonial.id)}>
                    Modifier
                  </button>
                  <button  onClick={() => deleteTestimonialById(testimonial.id)}>
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-10 col-xl-8 text-center mx-auto mt-5">
          <h3>{editingTestimonialId ? 'Modifier le témoignage' : 'Ajouter un nouveau témoignage'}</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nom"
              value={newTestimonial.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="role"
              className="form-control"
              placeholder="Rôle"
              value={newTestimonial.role}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              className="form-control"
              placeholder="Témoignage"
              value={newTestimonial.content}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="rating"
              className="form-control"
              placeholder="Note"
              value={newTestimonial.rating}
              onChange={handleInputChange}
            />
          </div>
          {editingTestimonialId ? (
            <button className="btn btn-primary" onClick={updateTestimonialHandler}>
              Mettre à jour le témoignage
            </button>
          ) : (
            <button className="btn btn-primary" onClick={addNewTestimonial}>
              Ajouter un témoignage
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
