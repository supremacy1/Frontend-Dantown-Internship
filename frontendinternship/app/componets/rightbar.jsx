import Image from "next/image";
import styles from "../styles/right.module.css"; // Import CSS module

const Rightbar = () => {
  return (
    <>
    <div className="flex-shrink-0 w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/5" >
        <div className={styles.rightcontainer} >
      
        <h1>
       
          {" "}
          <Image src="/images/Vector1.svg" alt="logo" width={100} height={100} />
          Sedboi.euy
        </h1>

        <ul className={styles.list}>
          <a href="#">
            <li className={styles.home}>
              {" "}
              <Image src="/images/Group.svg" alt="logo" width={100} height={100} />
              Home
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gr.svg" alt="logo" width={100} height={100} />
              Timeline
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/G9.svg" alt="logo" width={100} height={100} />
              Community
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gt.svg" alt="logo" width={100} height={100} />
              Discovery
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gr.svg" alt="logo" width={100} height={100} />
              Friends
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gk.svg" alt="logo" width={100} height={100} />
              Bookmark
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gp.svg" alt="logo" width={100} height={100} />
              Event
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gpp.svg" alt="logo" width={100} height={100} />
              Discussion
            </li>
          </a>
        </ul>
        <ul className={styles.list1}>
          <h3>Category</h3>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/G8.svg" alt="logo" width={100} height={100} />
              Sport
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Group 212.png" alt="logo" width={100} height={100} />
              Gaming
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Group 213.svg" alt="logo" width={100} height={100} />
              Music
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Group 215.png" alt="logo" width={100} height={100} />
              Tech & Science
            </li>
          </a>
        </ul>
      </div>
      </div>
      </>
   
  );
};

export default Rightbar;