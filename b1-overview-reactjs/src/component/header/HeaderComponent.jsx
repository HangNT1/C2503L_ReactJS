// khi dat ten component tranh :
// 1. Khong trung ten vs cac the HTML
// 2. Nen viet hoa chu cai dau theo lac da
import { useState } from "react";
import "./header.css";
function HeaderComponent1() {
  const [a, setA] = useState(0);
  // Chi co gia tri con
  // ten cua componenet & ten file => co the khac nhau
  // nhung thuong nen dat ten trung nhau
  return (
    // <div>aa</div>
    // <div>aa</div>
    <>
      {/* Day la noi dung view => chua code html */}
      <header>
        <p class="a">Đây là header</p>
      </header>
    </>
  );
}
// React Component:
// Co 2 loai:
// 1. Class Component
// 2. Function Component

// de cho cac component co the dung duoc no
export default HeaderComponent1;
