import * as React from "react";
import { ShoppingBag, Twitter, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <ShoppingBag className="h-8 w-8" {...props} />
  ),
  twitter: (props: IconProps) => (
    <Twitter className="h-4 w-4" {...props} />
  ),
  github: (props: IconProps) => (
    <Github className="h-4 w-4" {...props} />
  ),
  linkedin: (props: IconProps) => (
    <Linkedin className="h-4 w-4" {...props} />
  ),
  mail: (props: IconProps) => (
    <Mail className="h-4 w-4" {...props} />
  ),
  mapPin: (props: IconProps) => (
    <MapPin className="h-4 w-4" {...props} />
  ),
  phone: (props: IconProps) => (
    <Phone className="h-4 w-4" {...props} />
  ),
};
