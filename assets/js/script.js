  // JavaScript to toggle icons on collapse
  const accordionItems = document.querySelectorAll('.FAQ-Section .accordion-button');

  accordionItems.forEach(item => {
      item.addEventListener('click', function () {
          // Select the icon inside the button
          const icon = this.querySelector('i');
          // Determine if the button is expanded or collapsed
          const isExpanded = !this.classList.contains('collapsed'); 

          // Toggle between plus and minus icon
          if (isExpanded) {
              icon.classList.remove('fa-plus');
              icon.classList.add('fa-minus');
          } else {
              icon.classList.remove('fa-minus');
              icon.classList.add('fa-plus');
          }
      });
  });


//   appointment booking

const calendar = document.getElementById("calendar");
    const currentMonthYear = document.getElementById("current-month-year");
    const prevMonth = document.getElementById("prev-month");
    const nextMonth = document.getElementById("next-month");
    const timeSlotsContainer = document.getElementById("time-slots");

    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    // Mock time slots data
    const availableSlots = {
      "2025-01-17": ["2:00 AM", "3:00 AM", "3:30 AM", "4:30 AM"],
      "2025-01-20": ["10:00 AM", "11:30 AM", "1:30 PM"],
      "2025-01-21": ["9:00 AM", "2:00 PM", "4:30 PM"],
      "2025-01-22": ["2:00 AM", "3:00 AM", "3:30 AM", "4:30 AM"],
      "2025-01-23": ["10:00 AM", "11:30 AM", "1:30 PM"],
      "2025-01-24": ["9:00 AM", "2:00 PM", "4:30 PM"],
      "2025-01-27": ["9:00 AM", "2:00 PM", "4:30 PM"],
      "2025-01-28": ["2:00 AM", "3:00 AM", "3:30 AM", "4:30 AM"],
      "2025-01-29": ["10:00 AM", "11:30 AM", "1:30 PM"],
      "2025-01-30": ["9:00 AM", "2:00 PM", "4:30 PM"],
      "2025-01-31": ["2:00 AM", "3:00 AM", "3:30 AM", "4:30 AM"],
    };

    // Render the calendar
    const renderCalendar = (month, year) => {
      calendar.innerHTML = "";
      currentMonthYear.textContent = `${new Date(year, month).toLocaleString("default", {
        month: "long",
      })} ${year}`;

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        calendar.appendChild(emptyCell);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isoDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${day
          .toString()
          .padStart(2, "0")}`;
        const dayCell = document.createElement("div");
        dayCell.textContent = day;
        dayCell.className = "calendar-day";

        if (
          date < today ||
          date.getDay() === 0 || 
          date.getDay() === 6 || 
          !availableSlots[isoDate]
        ) {
          dayCell.classList.add("disabled");
        }

        dayCell.addEventListener("click", () => {
          document.querySelectorAll(".calendar-day").forEach((cell) =>
            cell.classList.remove("active")
          );
          dayCell.classList.add("active");
          showTimeSlots(isoDate);
        });

        calendar.appendChild(dayCell);
      }
    };


  // Show time slots for a selected date
const showTimeSlots = (date) => {
  timeSlotsContainer.innerHTML = "";

  if (availableSlots[date]) {
    availableSlots[date].forEach((slot) => {
      const slotContainer = document.createElement("div");
      slotContainer.className = "time-slot-container";

      const slotButton = document.createElement("button");
      slotButton.textContent = slot;
      slotButton.className = "time-slot";

      const nextButton = document.createElement("a");
      nextButton.textContent = "Next";
      nextButton.className = "btn btn-primary next-btn";
      nextButton.href = `BookingDetails.html?month=2025-01&date=${date}`;
      nextButton.target = "_blank";
      nextButton.style.display = "none"; 

      // Add click event for the slot button
      slotButton.addEventListener("click", () => {
        // Reset all other slots to their default state
        document.querySelectorAll(".time-slot-container").forEach((container) => {
          container.querySelector(".time-slot").classList.remove("selected");
          container.querySelector(".next-btn").style.display = "none";
        });

        // Mark the clicked slot as selected and show its "Next" button
        slotButton.classList.add("selected");
        nextButton.style.display = "inline-block";
      });

      slotContainer.appendChild(slotButton);
      slotContainer.appendChild(nextButton);
      timeSlotsContainer.appendChild(slotContainer);
    });
  } else {
    timeSlotsContainer.textContent = "No available slots for this date.";
  }
};

    // Navigate through months
    prevMonth.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
    });

    nextMonth.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
    });

    // Initialize calendar
    renderCalendar(currentMonth, currentYear);




    // JavaScript for Guest Button Functionality
    document.getElementById("guestButton").addEventListener("click", function () {
        const guestEmailField = document.getElementById("guestEmailField");
        if (guestEmailField.style.display === "none") {
            guestEmailField.style.display = "block"; 
        } else {
            guestEmailField.style.display = "none"; 
        }
    });
