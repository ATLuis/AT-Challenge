import { Form } from "react-router-dom";
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

export function LoginPage() {
  return (
    <Page className="justify-center items-center">
      <Card as={Form} className="w-1/2 lg:w-1/3" method="POST">
        <CardHeader className="flex-col justify-center gap-4">
          <Image src="/brand.png" width={140} />
          <h1 className="font-bold m-auto">aGENT REFERRAL SYSTEm</h1>
          <ApiStatus />
        </CardHeader>
        <CardBody>
          <Input name="username" type="text" label="Username" required/>
          <Spacer y={4} />
          <Input name="password" type="password" label="Password" required />
        </CardBody>
        <CardFooter className="justify-center">
          <Button type="submit">Login</Button>
        </CardFooter>
      </Card>
    </Page>
  );
}
