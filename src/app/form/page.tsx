'use client'
import React from 'react'
import Link from "next/link";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { useForm } from "react-hook-form";
import styles from './styles.module.scss'

import variables from '../variables.modules.scss'

import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

import { FormProps } from './type'

createStore({});

const initialValues = {
  gender: "",
  skills: {
    JavaScript: false,
    react: false,
    nodejs: false,
    angular: false
  }
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    defaultValues: {
      gender: initialValues.gender,
      skills: Object.keys(initialValues.skills).filter(
        (item) => initialValues.skills[item as keyof typeof initialValues['skills']] === true
      )
    }
  });

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Form Page</h1>

      <div className="container flex justify-center">
      <StateMachineProvider>
      <h1>Page Form Wizzard</h1>

      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email"
              }
            })}
          />
          {errors.email && <p className={styles.errorMsg} >{errors.email.message as string}</p>}
        </div>
        <div>
          <label>Select Gender</label>
          <input 
            id="gender"
            type="radio"
            value="male"
            {...register("gender", {
              required: "Please select your gender"
            })}
          />
          <label htmlFor="male">Male</label>
          <input 
            id="gender"
            type="radio"
            value="female"
            {...register("gender")}
          />
          <label htmlFor="female">Female</label>
          {errors.gender && <p className={styles.errorMsg} >{errors.gender.message as string}</p>}
        </div>
        <div>
          <label>Select Your Skills</label>
          <p>
            <input 
              type="checkbox"
              id="skill"
              value="JavaScript"
              {...register("skills", {
                required: "Please select at-least one skill"
              })}
            />
            <label htmlFor="JavaScript">JavaScript</label>
          </p>
          <p>
            <input 
              type="checkbox"
              id="skill"
              value="react"
              {...register("skills")}
            />
            <label htmlFor="JavaScript">react</label>
          </p>
          <p>
            <input 
              type="checkbox"
              id="skill"
              value="nodejs"
              {...register("skills")}
            />
            <label htmlFor="JavaScript">nodejs</label>
          </p>
          <p>
            <input 
              type="checkbox"
              id="skill"
              value="angular"
              {...register("skills")}
            />
            <label htmlFor="JavaScript">angular</label>
          </p>
          {errors.skills && <p className={styles.errorMsg} >{errors.skills.message as string}</p>}
        </div>
        
        <button type="submit">
          Submit
        </button>
      </form> */}
    </div>
      <Link href="/">Return Home</Link>
      <style jsx>{`
        .container div {
          color: pink;
        }
        :global(body) {
            background-color: blanchedalmond;
        }
      `}</style>
    </main>
  );
}
