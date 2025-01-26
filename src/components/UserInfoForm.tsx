import React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface UserInfoFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (email: string, nic: string, name: string) => void
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = React.useState("")
  const [nic, setNic] = React.useState("")
  const [name, setName] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, nic, name)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>User Information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nic" className="text-right">
              NIC
            </Label>
            <Input id="nic" value={nic} onChange={(e) => setNic(e.target.value)} className="col-span-3" required />
          </div>
          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default UserInfoForm

