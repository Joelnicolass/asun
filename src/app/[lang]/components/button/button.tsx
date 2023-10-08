"use client"
import { Button } from "@nextui-org/react";


const AppButton = ({color="default", variant="bordered", className = ''}: ButtonProps) => {
  return (
    <Button color={color} variant={variant} className={className}>
    Bordered
  </Button>  
  )
}

export default Button