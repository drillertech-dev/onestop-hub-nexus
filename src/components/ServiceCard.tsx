import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
  href: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  buttonText, 
  buttonVariant = "default",
  href 
}: ServiceCardProps) => {
  return (
    <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant={buttonVariant} 
          className="w-full group-hover:shadow-glow transition-all"
          asChild
        >
          <a href={href} className="flex items-center justify-center">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;