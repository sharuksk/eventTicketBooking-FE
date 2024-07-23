import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TicketPurchase = () => {
  const { bookedId } = useParams();
  const { user } = useSelector((state) => state.user);

  const [tickets, setTickets] = useState([]);

  const handleIncrement = (heading) => {
    setTickets((prevTickets) => {
      const ticketIndex = prevTickets.findIndex(ticket => ticket.heading === heading);
      if (ticketIndex > -1) {
        const updatedTickets = [...prevTickets];
        updatedTickets[ticketIndex].count += 1;
        return updatedTickets.filter(ticket => ticket.count > 0);
      }
      return [
        ...prevTickets,
        {
          id: Date.now(),
          heading,
          price: getPrice(heading),
          count: 1,
          user: user.id,
          eventId: bookedId,
        },
      ];
    });
  };

  const handleDecrement = (heading) => {
    setTickets((prevTickets) => {
      const ticketIndex = prevTickets.findIndex(ticket => ticket.heading === heading);
      if (ticketIndex > -1) {
        const updatedTickets = [...prevTickets];
        if (updatedTickets[ticketIndex].count > 0) {
          updatedTickets[ticketIndex].count -= 1;
        }
        return updatedTickets.filter(ticket => ticket.count > 0);
      }
      return prevTickets;
    });
  };

  const getPrice = (heading) => {
    switch (heading) {
      case "ENTRY TICKET":
        return 50;
      case "FAMILY TICKET":
        return 200;
      case "COUPLE TICKET":
        return 100;
      default:
        return 0;
    }
  };

  const totalAmount = tickets.reduce(
    (total, ticket) => total + ticket.count * ticket.price,
    0
  );

  const handleProceedToPayment = () => {
    console.log("Proceeding with tickets:", tickets);
    
  };
  console.log(tickets)

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Box sx={{ padding: "10px", width: "68%" }}>
        <Typography sx={{ fontSize: "2rem", mt: 2 }}>SELECT DATE</Typography>
        <Typography sx={{ mt: 2 }}>
          <input
            type="date"
            className="mt-4 p-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Typography>
        <Typography sx={{ fontSize: "2rem", mt: 2 }}>TICKET CATEGORY</Typography>
        <small>Choose your preferred ticket category</small>

        <div className="flex gap-3 flex-wrap mt-5">
          <Box
            sx={{
              width: "300px",
              borderRadius: "15px",
              padding: "15px",
              background: "#D8D9DA",
              color: "black",
            }}
          >
            <Typography>ENTRY TICKET</Typography>
            <Typography>
              <b>50 QAR</b>
            </Typography>
            <div className="flex items-center justify-between mt-3">
              <Button
                onClick={() => handleDecrement("ENTRY TICKET")}
                sx={{ background: "#fff" }}
              >
                <b>-</b>
              </Button>
              <h3>
                {tickets.find(ticket => ticket.heading === "ENTRY TICKET")?.count || 0}
              </h3>
              <Button
                onClick={() => handleIncrement("ENTRY TICKET")}
                color="primary"
                sx={{ background: "#fff" }}
              >
                <b>+</b>
              </Button>
            </div>
          </Box>
          <Box
            sx={{
              width: "300px",
              borderRadius: "15px",
              padding: "15px",
              background: "#D8D9DA",
              color: "black",
            }}
          >
            <Typography>FAMILY TICKET</Typography>
            <Typography>
              <b>200 QAR</b>
            </Typography>
            <div className="flex items-center justify-between mt-3">
              <Button
                onClick={() => handleDecrement("FAMILY TICKET")}
                sx={{ background: "#fff" }}
              >
                <b>-</b>
              </Button>
              <h3>
                {tickets.find(ticket => ticket.heading === "FAMILY TICKET")?.count || 0}
              </h3>
              <Button
                onClick={() => handleIncrement("FAMILY TICKET")}
                color="primary"
                sx={{ background: "#fff" }}
              >
                <b>+</b>
              </Button>
            </div>
          </Box>
          <Box
            sx={{
              width: "300px",
              borderRadius: "15px",
              padding: "15px",
              background: "#D8D9DA",
              color: "black",
            }}
          >
            <Typography>COUPLE TICKET</Typography>
            <Typography>
              <b>100 QAR</b>
            </Typography>
            <div className="flex items-center justify-between mt-3">
              <Button
                onClick={() => handleDecrement("COUPLE TICKET")}
                sx={{ background: "#fff" }}
              >
                <b>-</b>
              </Button>
              <h3>
                {tickets.find(ticket => ticket.heading === "COUPLE TICKET")?.count || 0}
              </h3>
              <Button
                onClick={() => handleIncrement("COUPLE TICKET")}
                color="primary"
                sx={{ background: "#fff" }}
              >
                <b>+</b>
              </Button>
            </div>
          </Box>
        </div>
      </Box>

      <Box sx={{ width: "32%", mt: 2 }}>
        <Typography sx={{ fontSize: "1.6rem" }}>PAYMENT SUMMARY</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>
          Please check the below details & proceed
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontSize: "1.6rem" }}>
            <b>QATAR TOY FESTIVAL</b>
          </Typography>
          <small>Jul 20 2024 | 2:00 PM TO 11:00 PM | DOHA</small>
        </Box>

        <div className="mt-5 border flex items-center">
          <input
            type="text"
            className="p-2 w-full"
            placeholder="Voucher Code / Promo Code?"
          />
          <Button>Apply</Button>
        </div>

        <Box
          sx={{
            marginTop: "13px",
            padding: "10px",
            background: "#D8D9DA",
            borderRadius: "7px",
          }}
        >
          {tickets.map((ticket, index) =>
            ticket.count > 0 ? (
              <div key={index} className="flex justify-between items-center">
                <h4 className="w-50">
                  <b>
                    ({ticket.count}) {ticket.heading}
                  </b>
                </h4>
                <h4 className="w-50 text-center">
                  {(ticket.count * ticket.price).toFixed(2)} QAR
                </h4>
              </div>
            ) : null
          )}
          <div className="flex justify-between items-center mt-5">
            <h4>
              <b>Sub Total</b>
            </h4>
            <h4>{totalAmount.toFixed(2)} QAR</h4>
          </div>
          <div className="flex justify-between items-center mt-5">
            <h4>
              <b>Total</b>
            </h4>
            <h4>{totalAmount.toFixed(2)} QAR</h4>
          </div>
        </Box>

        <div className="flex justify-center">
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 10, p: 1.5, color: "white", width: "100%" }}
            onClick={handleProceedToPayment}
          >
            <b>PROCEED TO PAYMENT</b>
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default TicketPurchase;
