import { useRouter } from 'next/router'

export default function FirstPost() {
  const router = useRouter();
  console.log(router.pathname);
  
  return <h1>Hello Yahoo</h1>;
}