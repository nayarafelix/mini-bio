import { CompanyArea, CompanyName,  CompanyTime } from './Company.styles'
const Company = ({ name, time, children }: { name: string, time?: string }) => {
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
