import {Card, CardHeader, CardBody, CardFooter, Divider, Button} from "@nextui-org/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps{
    tipo: string;
    message: string;
    description: string;
    href: string;
    children?: ReactNode;
};

const ItemMainLogin: React.FC<CardProps> = ({ tipo, message, description, href, children }) => {
  const navigate = useNavigate();

  const handleLogin = ()=>{
    navigate(href);
  }

  return (
    <Card className="max-w-[450px] p-5 w-[400px] min-w-[300px]">
      <CardHeader className="flex gap-3">
        {children}
        <div className="flex flex-col">
          <p className="text-md">{tipo}</p>
          <p className="text-small text-default-500">{message}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
      <Button color="primary" variant="faded" className="w-full" onClick={handleLogin}>
        Ingresar
      </Button> 
      </CardFooter>
    </Card>
  );
}

export default ItemMainLogin;