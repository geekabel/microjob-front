import React from 'react';
import {withFormik} from "formik";
import * as Yup from "yup";

const Formulaire = (props) => (

   <>
        <form>
            <div className="form-group">
                <label htmlFor="nom">Nom :</label>
                <input type="text" className="form-control" id="nom" aria-describedby="nomHelp"
                 name="nom"
                 onChange={props.handleChange}
                 value={props.values.nom}
                 onBlur= {props.handleBlur}
                 />
                 {
                     props.touched.nom && props.errors.nom && <span style={{color:"red"}}>{props.errors.nom}</span>
                 }
            </div>
            <div className="form-group">
                <label htmlFor="nom">email :</label>
                <input type="text" className="form-control" id="nom" aria-describedby="emailHelp"
                 name="email"
                 onChange={props.handleChange}
                 value={props.values.email}
                 onBlur= {props.handleBlur}
                  />
                 {
                     props.touched.email && props.errors.email && <span style={{color:"red"}}>{props.errors.email}</span>
                 }
            </div>
            <div className="form-group">
                <label htmlFor="message">Message :</label>
                <textarea className="form-control" id="message" rows="3"
                 name="message"
                 onChange={props.handleChange}
                 value={props.values.message}
                 onBlur = {props.handleBlur}
                 ></textarea>
                 {
                     props.touched.message && props.errors.message && <span style={{color:"red"}}>{props.errors.message}</span>
                 }
            </div>
            <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Envoyer</button>
            </form>
   </>
    
);

export default withFormik({
    mapPropsToValue : () => ({
        nom:"",
        email: "",
        message:""
    }),
    validationSchema : Yup.object().shape({
        nom : Yup.string()
                .min(5,"Le nom doit contenir au min 5 caracteres")
                .required("Le nom est obligatoire !"),

        email : Yup.string().email()
                    .required("email obligatoire"),
        message : Yup.string()
                    .min(20, "le message doit contenir au moins 20 caractères")
                    .max(200,"L'email ne doit pas depasser les 200 caracteres")
    }),
    handleSubmit :(values,{props}) =>{
       const message  = {
           nom: values.nom,
           email:values.email,
           contenu : values.message
       }
       props.sendMail(message);
    }
}) (Formulaire);