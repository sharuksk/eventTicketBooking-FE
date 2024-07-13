// src/components/ServiceSelector.js

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import VenueSelection from "../userPages/VenueSelection";
import CateringSelection from "../userPages/CateringSelection"; // Import other service components
import PhotographySelection from "../userPages/PhotographySelection";
import DecorationSelection from "../userPages/DecorationSelection";
import OrganizerSelection from "../userPages/OrganizerSelection";
import TicketBooking from "../userPages/TicketBooking";
import ServiceControls from "../userComponents/ServiceControls";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useLocation } from "react-router-dom";

const ServiceSelector = () => {
  const location = useLocation();
  const { selectedDates: initialSelectedDates } = location.state || {};

  const [service, setService] = useState("venue");
  const [selectedDates, setSelectedDates] = useState(
    initialSelectedDates || []
  );
  const [selectedSession, setSelectedSession] = useState("Day");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [selectedCaterings, setSelectedCaterings] = useState([]);
  const [selectedPhotographies, setSelectedPhotographies] = useState([]);
  const [selectedDecorations, setSelectedDecorations] = useState([]);
  const [selectedOrganizers, setSelectedOrganizers] = useState([]);

  const handleServiceChange = (selectedService) => {
    setService(selectedService);
  };

  const handleVenueSelect = (venue) => {
    if (selectedVenues.some((v) => v.id === venue.id)) {
      setSelectedVenues(selectedVenues.filter((v) => v.id !== venue.id));
    } else {
      setSelectedVenues([...selectedVenues, venue]);
    }
  };

  const handleCateringSelect = (catering) => {
    if (selectedCaterings.some((c) => c.id === catering.id)) {
      setSelectedCaterings(
        selectedCaterings.filter((c) => c.id !== catering.id)
      );
    } else {
      setSelectedCaterings([...selectedCaterings, catering]);
    }
  };

  const handlePhotographySelect = (photography) => {
    if (selectedPhotographies.some((p) => p.id === photography.id)) {
      setSelectedPhotographies(
        selectedPhotographies.filter((p) => p.id !== photography.id)
      );
    } else {
      setSelectedPhotographies([...selectedPhotographies, photography]);
    }
  };

  const handleDecorationSelect = (decoration) => {
    if (selectedDecorations.some((d) => d.id === decoration.id)) {
      setSelectedDecorations(
        selectedDecorations.filter((d) => d.id !== decoration.id)
      );
    } else {
      setSelectedDecorations([...selectedDecorations, decoration]);
    }
  };

  const handleOrganizerSelect = (organizer) => {
    if (selectedOrganizers.some((o) => o.id === organizer.id)) {
      setSelectedOrganizers(
        selectedOrganizers.filter((o) => o.id !== organizer.id)
      );
    } else {
      setSelectedOrganizers([...selectedOrganizers, organizer]);
    }
  };

  const getSelectedItemCount = () => {
    return (
      selectedVenues.length +
      selectedCaterings.length +
      selectedPhotographies.length +
      selectedDecorations.length +
      selectedOrganizers.length
    ); // Add more services as needed
  };

  return (
    <Box>
      <ServiceControls
        onDatesChange={setSelectedDates}
        onSessionChange={setSelectedSession}
        onLocationChange={setSelectedLocation}
      />
      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          variant="text"
          onClick={() => handleServiceChange("venue")}
          sx={{
            color: service === "venue" ? "white" : "primary.main",
            borderRadius: 50,
            backgroundColor:
              service === "venue" ? "primary.main" : "-moz-initial",
            "&:hover": {
              backgroundColor: service === "venue" ? "primary.dark" : "#e8688e",
            },
            fontWeight: "bold",
          }}
        >
          Venue
        </Button>
        <ArrowRightIcon sx={{ mt: 1, mr: 1, ml: 1 }} />
        <Button
          variant="text"
          onClick={() => handleServiceChange("catering")}
          sx={{
            color: service === "catering" ? "white" : "primary.main",
            borderRadius: 50,
            backgroundColor:
              service === "catering" ? "primary.main" : "-moz-initial",
            "&:hover": {
              backgroundColor:
                service === "catering" ? "primary.dark" : "#e8688e",
            },
            fontWeight: "bold",
          }}
        >
          Catering
        </Button>
        <ArrowRightIcon sx={{ mt: 1, mr: 1, ml: 1 }} />
        <Button
          variant="text"
          onClick={() => handleServiceChange("photography")}
          sx={{
            color: service === "photography" ? "white" : "primary.main",
            borderRadius: 50,
            backgroundColor:
              service === "photography" ? "primary.main" : "-moz-initial",
            "&:hover": {
              backgroundColor:
                service === "photography" ? "primary.dark" : "#e8688e",
            },
            fontWeight: "bold",
          }}
        >
          Photography
        </Button>
        <ArrowRightIcon sx={{ mt: 1, mr: 1, ml: 1 }} />
        <Button
          variant="text"
          onClick={() => handleServiceChange("decoration")}
          sx={{
            color: service === "decoration" ? "white" : "primary.main",
            borderRadius: 50,
            backgroundColor:
              service === "decoration" ? "primary.main" : "-moz-initial",
            "&:hover": {
              backgroundColor:
                service === "decoration" ? "primary.dark" : "#e8688e",
            },
            fontWeight: "bold",
          }}
        >
          Decoration
        </Button>
        <ArrowRightIcon sx={{ mt: 1, mr: 1, ml: 1 }} />
        <Button
          variant="text"
          onClick={() => handleServiceChange("organizer")}
          sx={{
            color: service === "organizer" ? "white" : "primary.main",
            borderRadius: 50,
            backgroundColor:
              service === "organizer" ? "primary.main" : "-moz-initial",
            "&:hover": {
              backgroundColor:
                service === "organizer" ? "primary.dark" : "#e8688e",
            },
            fontWeight: "bold",
          }}
        >
          Organizer
        </Button>
        <ArrowRightIcon sx={{ mt: 1, mr: 1, ml: 1 }} />
        <Button
          variant="text"
          onClick={() => handleServiceChange("ticketBooking")}
          sx={{
            color: service === "ticketBooking" ? "white" : "primary.main",
            borderRadius: 50,
            backgroundColor:
              service === "ticketBooking" ? "primary.main" : "-moz-initial",
            "&:hover": {
              backgroundColor:
                service === "ticketBooking" ? "primary.dark" : "#e8688e",
            },
            fontWeight: "bold",
          }}
        >
          Ticket Booking
        </Button>
        {/* Add similar buttons for other services */}
      </Box>

      {service === "venue" && (
        <VenueSelection
          selectedDates={selectedDates}
          selectedSession={selectedSession}
          selectedLocation={selectedLocation}
          selectedVenues={selectedVenues}
          handleVenueSelect={handleVenueSelect}
        />
      )}
      {service === "catering" && (
        <CateringSelection
          selectedDates={selectedDates}
          selectedSession={selectedSession}
          selectedLocation={selectedLocation}
          selectedCaterings={selectedCaterings}
          handleCateringSelect={handleCateringSelect}
        />
      )}
      {/* Add conditional rendering for other services */}
      {service === "photography" && (
        <PhotographySelection
          selectedDates={selectedDates}
          selectedSession={selectedSession}
          selectedLocation={selectedLocation}
          selectedPhotographies={selectedPhotographies}
          handlePhotographySelect={handlePhotographySelect}
        />
      )}
      {service === "decoration" && (
        <DecorationSelection
          selectedDates={selectedDates}
          selectedSession={selectedSession}
          selectedLocation={selectedLocation}
          selectedDecorations={selectedDecorations}
          handleDecorationSelect={handleDecorationSelect}
        />
      )}
      {service === "organizer" && (
        <OrganizerSelection
          selectedDates={selectedDates}
          selectedSession={selectedSession}
          selectedLocation={selectedLocation}
          selectedOrganizers={selectedOrganizers}
          handleOrganizerSelect={handleOrganizerSelect}
        />
      )}
      {service === "ticketBooking" && <TicketBooking />}

      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          disabled={getSelectedItemCount() === 0}
        >
          {`Order ${
            getSelectedItemCount() > 0
              ? `(${getSelectedItemCount()} items selected)`
              : ""
          }`}
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceSelector;