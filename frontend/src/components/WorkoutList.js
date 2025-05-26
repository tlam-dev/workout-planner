// Display a list of workouts with filtering and sorting options
import { useEffect, useState } from "react";
import axios from "axios";

const PORT = process.env.REACT_APP_BACKEND_PORT; // Change this to your backend port if necessary
const API_URL = `http://localhost:${PORT}/workouts`;

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);
    const [filteredWorkouts, setFilteredWorkouts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedGroup, setSelectedGroup] = useState("");
    const [selectedEquipment, setSelectedEquipment] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");


    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setWorkouts(response.data);
                setFilteredWorkouts(response.data); // Initialize filtered list
            })
            .catch(error => console.error("Error fetching schedule:", error));
    }, []);

    // Function to filter by group or equipment
    const uniqueCategories = [...new Set(workouts.map(item => item.category).filter(category => category))];
    const uniqueGroups = [...new Set(workouts.flatMap(item => item.group).filter(group => group))];
    const uniqueEquipment = [...new Set(workouts.flatMap(item => item.equipment).filter(equipment => equipment))];

    // Function to filter by category
    const filterByCategory = (category) => {
        setSelectedCategory(category);
        setFilteredWorkouts(
            category ? workouts.filter(item => item.category === category) : workouts
        );
    };

    // Function to filter by group
    const filterByGroup = (group) => {
        setSelectedGroup(group);
        setFilteredWorkouts(
            group ? workouts.filter(item => item.group.includes(group)) : workouts
        );
    };

    // Function to filter by equipment
    const filterByEquipment = (equipment) => {
        setSelectedEquipment(equipment);
        setFilteredWorkouts(
            equipment ? workouts.filter(item => item.equipment.includes(equipment)) : workouts
        );
    };

    // Function to sort by duration
    const sortByDuration = () => {
        const sortedData = [...filteredWorkouts].sort((a, b) => 
            sortOrder === "asc" ? a.duration - b.duration : b.duration - a.duration
        );
        setFilteredWorkouts(sortedData);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
    };

    return (
        <div>
            <div class="filter-controls">
                <label>Filter by Category:</label>
                <select value={selectedCategory} onChange={(e) => filterByCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {uniqueCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <label>Filter by Group:</label>
                <select value={selectedGroup} onChange={(e) => filterByGroup(e.target.value)}>
                    <option value="">All Groups</option>
                    {uniqueGroups.map((group, index) => (
                        <option key={index} value={group}>{group}</option>
                    ))}
                </select>

                <label>Filter by Equipment:</label>
                <select value={selectedEquipment} onChange={(e) => filterByEquipment(e.target.value)}>
                    <option value="">All Equipment</option>
                    {uniqueEquipment.map((equipment, index) => (
                        <option key={index} value={equipment}>{equipment}</option>
                    ))}
                </select>
                <button onClick={() => setFilteredWorkouts(workouts)}>Reset Filter</button>
                <button onClick={sortByDuration}>
                  Sort by Duration ({sortOrder === "asc" ? "Ascending" : "Descending"})
                </button>
            </div>

            <div class="workouts-container">
            {filteredWorkouts.map((item, index) => (
                <div key={index} class="workout-block">
                  <h2>{item.name}</h2>
                  <ul>
                      <li><strong>Category:</strong> {item.category}</li>
                      
                      {/* Render Group only if it's not an empty array */}
                      {item.group.length > 0 && (
                          <li><strong>Group:</strong> {item.group.join(", ")}</li>
                      )}

                      {/* Render Equipment only if it's not an empty array */}
                      {item.equipment.length > 0 && (
                          <li><strong>Equipment:</strong> {item.equipment.join(", ")}</li>
                      )}
                  </ul>
              </div>
            ))}
            </div>
        </div>
    );
};

export default WorkoutList;


/*

const WorkoutList = ({ onEditWorkout }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setWorkouts(response.data))
      .catch(error => console.error("Error fetching schedule:", error));
  }, []);

  return (
    <div class="workouts-container"style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {workouts.map((item, index) => (
        <div key={index} style={{ border: "1px solid black", padding: "10px", margin: "10px", borderRadius: "5px" }}>
         <h2>{item.name}</h2>
          <ul>
            {Object.entries(item).map(([key, value]) =>
              value !== "" && value !== 0 && key !== "name" ? (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ) : null
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;

*/
