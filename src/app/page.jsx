"use client";
import React from "react";

function MainComponent() {
  const [currentCard, setCurrentCard] = React.useState(0);
  const [swipedRight, setSwipedRight] = React.useState([]);
  const [swipedLeft, setSwipedLeft] = React.useState([]);
  const [swiping, setSwiping] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");

  const associations = [
    {
      id: 1,
      name: "BDS Alibaboa (IESEG)",
      description:
        "Sports coordination Office for IESEG",
      budget: "1500-2000€",
      members: 31,
      image: "images/bds.png",
    },
    {
      id: 2,
      name: "KryptoSphere Devinci",
      description: "Cryptocurrencies, blockchain & Web 3.0 association of Pôle Léonard de Vinci",
      budget: "4000-8000€",
      members: 73,
      image: "images/KS.png",
    },
    {
      id: 3,
      name: "Les Volleurs VB",
      description: "Volleyball team of IESEG Paris.",
      budget: "500-1000€",
      members: 12,
      image: "images/volleurs.png",
    },
    {
      id: 4,
      name: "Esscave à vins",
      description: "Making ESSCA Lyon students discover oenology",
      budget: "1000-2500€",
      members: 14,
      image: "images/esscave.png",
    },
    {
      id: 5,
      name: "BDE Vincisquad (EMLV)",
      description: "Student Association of EMLV Business School",
      budget: "3500-6000€",
      members: 34,
      image: "images/Vincisquad.png",
    },
  ];

  const handleSwipe = (direction) => {
    if (swiping) return;
    setSwiping(true);

    if (direction === "right") {
      setSwipedRight([...swipedRight, associations[currentCard]]);
    } else {
      setSwipedLeft([...swipedLeft, associations[currentCard]]);
    }

    setTimeout(() => {
      setCurrentCard((prev) => prev + 1);
      setSwiping(false);
    }, 300);
  };

  const filteredAssociations = associations
    .filter((association) => {
      if (selectedFilter === "all") return true;
      if (selectedFilter === "lowBudget")
        return (
          parseInt(association.budget.split("-")[0].replace("$", "")) < 500
        );
      if (selectedFilter === "highBudget")
        return (
          parseInt(association.budget.split("-")[0].replace("$", "")) >= 500
        );
      return true;
    })
    .filter(
      (association) =>
        association.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        association.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (currentCard >= filteredAssociations.length) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 font-roboto">
            No More Students Associations... :(
          </h2>
          <p className="text-gray-600 font-roboto">
            You've viewed all available associations for the moment, get notified when something new is available !
          </p>
          <button
            onClick={() => setCurrentCard(0)}
            className="mt-4 bg-[#FF4D4D] text-white px-6 py-2 rounded-full hover:bg-[#FF3333] transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  const currentAssociation = filteredAssociations[currentCard];

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
      <div className="absolute top-0 left-0 flex flex-col items-center p-4">
  <img
    src="/images/SL-logo.png" // Change "SL-logo.png" par le chemin de ton logo
    alt="App Logo"
    className="w-28 h-28"
  />
  <h1 className="text-xl font-bold font-roboto text-center">Sponsolink</h1>
</div>

        <div className="max-w-md mx-auto relative">
          <div className="mb-4 flex flex-col gap-2">

            
          </div>

          <div
            className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 absolute w-full ${
            swiping
              ? swipedRight.includes(associations[currentCard])
              ? "animate-slideRight"
              : swipedLeft.includes(associations[currentCard])
              ? "animate-slideLeft"
              : ""
              : "animate-fadeIn"
            }`}
          >

            <div className="relative h-[400px]">
              <img
                src={currentAssociation.image}
                alt={`${currentAssociation.name} association profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 font-roboto">
                {currentAssociation.name}
              </h2>
              <p className="text-gray-600 mb-4 font-roboto">
                {currentAssociation.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500 font-roboto">
                <span>Required Budget: {currentAssociation.budget}</span>
                <span>Members: {currentAssociation.members}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-4 border-t">
  {/* Ligne des deux boutons Swipe */}
  <div className="flex justify-center gap-4 w-full">
    {/* Bouton Gauche */}
    <button
      onClick={() => handleSwipe("left")}
      className="w-16 h-16 flex items-center justify-center bg-white border-2 border-red-500 rounded-full hover:bg-red-50 transition-all hover:scale-110"
      disabled={swiping}
    >
      <i className="fas fa-times text-red-500 text-2xl"></i>
    </button>

    {/* Bouton Droit */}
    <button
      onClick={() => handleSwipe("right")}
      className="w-16 h-16 flex items-center justify-center bg-white border-2 border-green-500 rounded-full hover:bg-green-50 transition-all hover:scale-110"
      disabled={swiping}
    >
      <i className="fas fa-euro-sign text-green-500 text-2xl"></i>
    </button>
  </div>

  {/* Bouton Centré en Dessous */}
<button
  className="mt-4 flex items-center gap-2 bg-[#2eaea9] text-white px-6 py-2 rounded-lg shadow hover:bg-[#95cdc6] transition-all"
  onClick={() => {}}
>
  <i className="fas fa-plus text-white"></i>
  <span>Click to see their activities</span>
</button>

</div>

          </div>

          <div style={{ position: "absolute", top: 750, width: "100%", textAlign: "center", padding: "10px" }}>
  <p className="text-sm text-gray-500 font-roboto">
    Swipe right to sponsor, left to pass
  </p>
</div>

        </div>
      </div>
    </>
  );
}

export default MainComponent;