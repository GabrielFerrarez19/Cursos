import { User } from 'lucide-react';


type CardProps = {
  link: string;
};

export function Card({ link }: CardProps) {
    return(
        <div>
            <img 
            className="rounded-4xl max-w-69 max-h-139"
                src={link}
                alt="Image Card" 
            />
            <strong className='font-bold'>Birds Procreate Illustration</strong>
            <div className='flex w-70 h-auto'>
                <User />
                <span>mstflotfy</span>
            </div>
        </div>  
    );
}