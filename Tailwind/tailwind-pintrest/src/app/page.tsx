import Image from "next/image";
import "./globals.css";
import { Header2 } from "../components/header";
import { Card } from "../components/card";
import { RighBar} from "../components/righ-bar"

export default function Home() {
  return (
    <div className="relative">
      <Header2 />
      <div className="flex justify-between px-42 w-auto">
          <div className="flex flex-col gap-14 "> 
            <Card link="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <Card link="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?_gl=1*zsc9rx*_ga*NjYwMDQ3OTk3LjE3NTE4MjMyNzE.*_ga_8JE65Q40S6*czE3NTE4MjMyNzEkbzEkZzEkdDE3NTE4MjMyNzMkajU4JGwwJGgw"/>

            <Card link="https://c8.alamy.com/comp/2EKBX5A/portugal-lisbon-torre-de-belem-at-sunset-2EKBX5A.jpg"/>
          </div>
          <div className="flex flex-col gap-14 "> 
            <Card link="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?_gl=1*zsc9rx*_ga*NjYwMDQ3OTk3LjE3NTE4MjMyNzE.*_ga_8JE65Q40S6*czE3NTE4MjMyNzEkbzEkZzEkdDE3NTE4MjMyNzMkajU4JGwwJGgw"/>

            <Card link="https://gratisography.com/wp-content/uploads/2019/09/gratisography-blue-wall-looking-free-stock-photo-1170x780.jpg"/>

            <Card link="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
          <div className="flex flex-col gap-14 "> 
            <Card link="https://c8.alamy.com/comp/2EKBX5A/portugal-lisbon-torre-de-belem-at-sunset-2EKBX5A.jpg"/>

            <Card link="https://petapixel.com/assets/uploads/2024/01/The-Star-of-System-Sol-Rectangle-640x800.jpg"/>

            <Card link="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?_gl=1*zsc9rx*_ga*NjYwMDQ3OTk3LjE3NTE4MjMyNzE.*_ga_8JE65Q40S6*czE3NTE4MjMyNzEkbzEkZzEkdDE3NTE4MjMyNzMkajU4JGwwJGgw"/>
          </div>
          <div className="flex flex-col gap-14 "> 
            <Card link="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <Card link="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?_gl=1*zsc9rx*_ga*NjYwMDQ3OTk3LjE3NTE4MjMyNzE.*_ga_8JE65Q40S6*czE3NTE4MjMyNzEkbzEkZzEkdDE3NTE4MjMyNzMkajU4JGwwJGgw"/>

            <Card link="https://c8.alamy.com/comp/2EKBX5A/portugal-lisbon-torre-de-belem-at-sunset-2EKBX5A.jpg"/>
          </div>
          <div className="flex flex-col gap-14 "> 
            <Card link="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?_gl=1*zsc9rx*_ga*NjYwMDQ3OTk3LjE3NTE4MjMyNzE.*_ga_8JE65Q40S6*czE3NTE4MjMyNzEkbzEkZzEkdDE3NTE4MjMyNzMkajU4JGwwJGgw"/>

            <Card link="https://c8.alamy.com/comp/2EKBX5A/portugal-lisbon-torre-de-belem-at-sunset-2EKBX5A.jpg"/>

            <Card link="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
      </div>
        <RighBar />
    </div>
  );
}
