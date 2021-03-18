import React from 'react'
import {withFormik} from "formik";
import * as Yup from "yup";


 const Formservice  = (props)  => (


        <>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom + prenom :</label>
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
                    <label htmlFor="phone">Numero de telephone :</label>
                    <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp"
                    name="phone"
                    onChange={props.handleChange}
                    value={props.values.phone}
                    onBlur= {props.handleBlur}
                    />
                    {
                        props.touched.phone && props.errors.phone && <span style={{color:"red"}}>{props.errors.phone}</span>
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
        phone: "",
        message:""
    }),

    validationSchema : Yup.object().shape({
        nom : Yup.string()
                .min(5,"Le nom doit contenir au min 5 caracteres")
                .required("Le nom est obligatoire !"),

        phone : Yup.string()
                   .min(8,"le numero de telephone doit contenir au moins 8 caracteres")
                   .required("numero de telephone obligatoire"),

        message : Yup.string()
                    .min(20, "le message doit contenir au moins 20 caractères")
                    .max(200,"L'email ne doit pas depasser les 200 caracteres")
    }),

    handleSubmit :(values,{props}) =>{
       const message  = {
           nom: values.nom,
           phone:values.email,
           contenu : values.message
       }
       props.sendMail(message);
    }
}) (Formservice);
 //export default Formservice;
