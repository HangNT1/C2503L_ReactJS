import { useParams } from "react-router-dom";

export default function ProfiePage() {
  const { id1 } = useParams();
  return (
    <>
      <h1>Day la trang Profile - {id1}</h1>
    </>
  );
}
