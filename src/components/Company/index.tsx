import React from "react"
import { CompanyArea, CompanyName,  CompanyTime } from './Company.styles'

interface CompanyProps {
  name: string
  time?: string
  children: React.ReactNode
}

const Company = ({ name, time, children }: CompanyProps) => {
  return (
    <>
      <CompanyArea>
        <CompanyName>{ name }</CompanyName>
        <CompanyTime>{ time }</CompanyTime>
      </CompanyArea>
      { children }
    </>
  )
}

export { Company }
