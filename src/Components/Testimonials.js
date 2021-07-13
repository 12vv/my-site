import React from "react";

// const Testimonials = ({ data }) => {
//   if (data) {
//     var testimonials = data.testimonials.map(function (testimonials) {
//       return (
//         <li key={testimonials.user}>
//           <blockquote>
//             <p>{testimonials.text}</p>
//             <cite>{testimonials.user}</cite>
//           </blockquote>
//         </li>
//       );
//     });
//   }
const Testimonials = ({ data }) => {
  if (data) {
    var skills = data.skills.map(function (skills) {
      return (
        <a key={skills.text} class="button">{skills.text}</a>
      );
    });
  }

  return (
    <section id="testimonials">
      <section class="section section-gray background-img">
   <div class="row">
    <div class="col-sm-8 col-sm-offset-2">
      		   <p class="section-paragraph white title">Skills</p>
    <p class="section-paragraph">
      {skills}
      </p>
    </div>
  </div>
</section>
      {/* <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Testimonials;
