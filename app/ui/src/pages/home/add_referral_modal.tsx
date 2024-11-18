import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { URI_DOTNET } from "../../constants";

type FormDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export function AddReferralModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      console.log(formData);
      const response = await fetch(`${URI_DOTNET}/Agent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
      } else {
        const data = await response.json();
        console.log("Success:", data);
      }
      onOpenChange();
      window.location.reload();
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <Button onPress={onOpen}>Add</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent as={Form} method="POST">
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                New Agent
              </ModalHeader>
              <ModalBody>
                <fieldset className="flex flex-col gap-4">
                  <legend className="font-semibold mb-4">
                    Personal Information
                  </legend>

                  <div className="flex gap-4">
                    <Input name="firstName" label="First name" onChange={(e)=>handleChange(e)} required />
                    <Input name="lastName" label="Last name" onChange={(e)=>handleChange(e)} required />
                  </div>

                  <Input name="phone" label="Phone" onChange={(e)=>handleChange(e)} required />
                </fieldset>

                <fieldset className="flex flex-col gap-4">
                  <legend className="font-semibold mb-4">Access Details</legend>

                  <Input name="username" label="Username" onChange={(e)=>handleChange(e)} required />

                  <div className="flex gap-4">
                    <Input
                      name="password"
                      label="Password"
                      type="password"
                      onChange={(e)=>handleChange(e)}
                      required
                    />
                    <Input
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      onChange={(e)=>handleChange(e)}
                      required
                    />
                  </div>
                </fieldset>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary"
                onClick={()=>handleSubmit()}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
