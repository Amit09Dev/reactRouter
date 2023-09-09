import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function User() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  const fetchUserData = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.results[0];
        setName(user.name.first);
        setLastname(user.name.last);
        setEmail(user.email);
        setImg(user.picture.large);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const { userid } = useParams();
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <img src={img} alt="" className="rounded-full mx-auto my-auto" />
          <p className="pt-2 text-lg font-semibold text-gray-50">
            {name} {lastname}
          </p>
          <p className="text-sm text-gray-100">{email}</p>
          <div className="mt-5">
            <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              user id: <strong>{userid}</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
