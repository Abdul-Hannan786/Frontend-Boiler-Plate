import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import  loans  from "../utils/loan"

export function LoanCards() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Loan Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map((loan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">{loan.category}</CardTitle>
                <Badge variant={loan.pending ? "secondary" : "default"}>{loan.pending ? "Pending" : "Approved"}</Badge>
              </div>
              <CardDescription>{loan.subcategory}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Name:</span> {loan.name}
                </p>
                <p>
                  <span className="font-semibold">NIC:</span> {loan.nic}
                </p>
                <p>
                  <span className="font-semibold">Loan Amount:</span> Rs. {loan.loanAmount.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Loan Period:</span> {loan.loanPeriod}
                </p>
                <p>
                  <span className="font-semibold">Monthly Payment:</span> Rs. {loan.monthlyPayment.toLocaleString()}
                </p>
              </div>
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="guarantors">
                  <AccordionTrigger>Guarantors</AccordionTrigger>
                  <AccordionContent>
                    {loan.guarantors.map((guarantor, gIndex) => (
                      <div key={gIndex} className="mb-2">
                        <p>
                          <span className="font-semibold">Name:</span> {guarantor.name}
                        </p>
                        <p>
                          <span className="font-semibold">CNIC:</span> {guarantor.cnic}
                        </p>
                        <p>
                          <span className="font-semibold">Location:</span> {guarantor.location}
                        </p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">Total: Rs. {loan.totalLoan.toLocaleString()}</p>
              <Button variant="outline">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

