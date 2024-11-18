import { Form, useNavigate } from "react-router-dom";
import { ApiStatus, Page } from "../../components";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";
import loginController from "../../controllers/login-controller";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const handleSubmit = async ()=>{
    console.log(username, password);
    const resp = await loginController.loginFromGraphql(username, password);
    console.log(resp);
    if(resp.login === "Login successful"){
      navigate("/home");
    }
  }

  return (
    <Page className="justify-center items-center">
      <Card as={Form} className="w-1/2 lg:w-1/3" method="POST">
        <CardHeader className="flex-col justify-center gap-4">
          <Image src="/brand.png" width={140} />
          <h1 className="font-bold m-auto">AGENT REFERRAL SYSTEM</h1>
          <ApiStatus />
        </CardHeader>
        <CardBody>
          <Input name="username" type="text" label="Username" onChange={(e)=>handleUsernameChange(e)} required/>
          <Spacer y={4} />
          <Input name="password" type="password" label="Password" onChange={(e)=>handlePasswordChange(e)} required />
        </CardBody>
        <CardFooter className="justify-center">
          <Button type="submit" onClick={()=>handleSubmit()}>Login</Button>
        </CardFooter>
      </Card>
    </Page>
  );
}
