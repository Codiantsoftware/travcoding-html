import React from "react";
import { Button } from "../Button";
import { Nav, OverlayTrigger, Table, Tooltip, Tab } from "react-bootstrap";

export function ViewsModal({handlePortsShow, innertoggleCruise, toggleDates}) {
  //table Data
  const tableData = [
    { type: "header", month: "November, 2024" },
    {
      type: "date",
      date: "Fri, November 15, 2024",
      price: "$244.91",
      icons: ["drink", "credit", "wifi"],
    },
    { type: "header", month: "December, 2024" },
    {
      type: "date",
      date: "Fri, December 18, 2024",
      price: "$315.91",
      icons: ["drink", "credit", "wifi"],
    },
    { type: "header", month: "January, 2024" },
    {
      type: "date",
      date: "Thu Dec 19, 2024",
      price: "$248.91",
      icons: ["drink", "credit", "wifi"],
    },
    { type: "header", month: "February, 2024" },
    {
      type: "date",
      date: "Tus, February 04, 2025",
      price: "$359.91",
      icons: ["drink", "credit", "wifi"],
    },
    {
      type: "date",
      date: "Fri, February 28, 2025",
      price: "$359.91",
      icons: ["drink", "credit", "wifi"],
    },
    { type: "header", month: "March, 2024" },
    {
      type: "date",
      date: "Mon, March 10, 2025",
      price: "$479.91",
      icons: ["drink", "credit", "wifi"],
    },
    {
      type: "date",
      date: "Fri, November 15, 2025",
      price: "$5,603.00",
      icons: [],
    },
  ];
  return (
    <>
       <div className="sideModal_head pd-40 pb-0 mb-20">
          <h2 className="sideModal_head_title d-flex align-items-center">
            3 Nights
            <div className="sideModal_head_review">
              <em className="icon-star active" />
              <em className="icon-star active" />
              <em className="icon-star active" />
              <em className="icon-star active" />
              <em className="icon-star half" />
              <span>4.5</span>
            </div>
          </h2>
          <div className="sideModal_head_list">
            <em className="icon-ship" /><span className="font-md">MSC Seashore</span><span className="font-md">Bahamas</span>
          </div>
        </div>
        <div className="sideModal_body">
          <Tab.Container defaultActiveKey="#Inside">
            <div className="sideModal_body_view">
              <div className="sideModal_body_sub font-md">Caribbean and Antilles, 3 Nights</div>
              <ul className="list-unstyled">
                <li>
                  <span className="font-md">Roundtrip From:</span><span> Port Canaveral, Port Canaveral</span>
                </li>
                <li>
                  <span className="font-md">Cruise Line Tour:</span><span> Port Canaveral (Orlando) Florida | Nassau Bahamas | Ocean Cay Msc Marine Reserve Bahamas | Port Canaveral (Orlando) Florida </span>
                </li>
              </ul>
              <div className="sideModal_body_btns d-flex align-items-center justify-content-between">
                <div role="button" className="sideModal_body_port font-md" onClick={handlePortsShow}>+ View Ports & Map</div>
                <Button type="button" extraClass="text-uppercase" variant="outline-secondary" label="View Itinerary" onClick={innertoggleCruise} />
              </div>
              <div className="sideModal_body_txt d-sm-flex align-items-sm-center justify-content-sm-between">
                <div className="sideModal_body_available font-md">17 Available Date</div>
                <div className="sideModal_body_rate font-md">Lowest available rate</div>
              </div>
              <Nav variant="pills" className="commonTabs border-md">
                <Nav.Item>
                  <Nav.Link href="#Suite" eventKey="#Suite">Suite</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Balcony" eventKey="#Balcony">Balcony</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Outside" eventKey="#Outside">Outside</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Outside" eventKey="#Inside">Inside</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="sideModal_body_table">
              <Tab.Content>
                <Tab.Pane eventKey="#Suite">
                  <Table responsive className="mb-0">
                    <tbody>
                      {tableData.map((row, index) => {
                        if (row.type === "header") {
                          return (
                            <tr key={index} className="odd">
                              <td colSpan={4}>{row.month}</td>
                            </tr>
                          );
                        } else if (row.type === "date") {
                          return (
                            <tr key={index} className="even">
                              <td className="w-383">{row.date}</td>
                              <td className="w-245">
                                <span className={row.price === "$244.91" ? "active" : ""}>
                                  {row.price}
                                </span>
                              </td>
                              <td className="w-160">
                                <div className="tbIcon d-flex">
                                  {row.icons.map((icon, i) => (
                                    <div
                                      key={i}
                                      role="button"
                                      className="tbIcon_items"
                                      aria-label="tbIcon-btn"
                                    >
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>{icon.charAt(0).toUpperCase() + icon.slice(1)}</Tooltip>}
                                      >
                                        <em className={`icon-${icon}`} />
                                      </OverlayTrigger>
                                    </div>
                                  ))}
                                </div>
                              </td>
                              <td className="w-142">
                                <div
                                  role="button"
                                  onClick={toggleDates}
                                  className="tbDate"
                                >
                                  Select Date <em className="icon-chevron-right" />
                                </div>
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="#Balcony">
                  <Table responsive className="mb-0">
                    <tbody>
                      {tableData.map((row, index) => {
                        if (row.type === "header") {
                          return (
                            <tr key={index} className="odd">
                              <td colSpan={4}>{row.month}</td>
                            </tr>
                          );
                        } else if (row.type === "date") {
                          return (
                            <tr key={index} className="even">
                              <td className="w-383">{row.date}</td>
                              <td className="w-245">
                                <span className={row.price === "$244.91" ? "active" : ""}>
                                  {row.price}
                                </span>
                              </td>
                              <td className="w-160">
                                <div className="tbIcon d-flex">
                                  {row.icons.map((icon, i) => (
                                    <div
                                      key={i}
                                      role="button"
                                      className="tbIcon_items"
                                      aria-label="tbIcon-btn"
                                    >
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>{icon.charAt(0).toUpperCase() + icon.slice(1)}</Tooltip>}
                                      >
                                        <em className={`icon-${icon}`} />
                                      </OverlayTrigger>
                                    </div>
                                  ))}
                                </div>
                              </td>
                              <td className="w-142">
                                <div
                                  role="button"
                                  onClick={toggleDates}
                                  className="tbDate"
                                >
                                  Select Date <em className="icon-chevron-right" />
                                </div>
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="#Outside">
                  <Table responsive className="mb-0">
                    <tbody>
                      {tableData.map((row, index) => {
                        if (row.type === "header") {
                          return (
                            <tr key={index} className="odd">
                              <td colSpan={4}>{row.month}</td>
                            </tr>
                          );
                        } else if (row.type === "date") {
                          return (
                            <tr key={index} className="even">
                              <td className="w-383">{row.date}</td>
                              <td className="w-245">
                                <span className={row.price === "$244.91" ? "active" : ""}>
                                  {row.price}
                                </span>
                              </td>
                              <td className="w-160">
                                <div className="tbIcon d-flex">
                                  {row.icons.map((icon, i) => (
                                    <div
                                      key={i}
                                      role="button"
                                      className="tbIcon_items"
                                      aria-label="tbIcon-btn"
                                    >
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>{icon.charAt(0).toUpperCase() + icon.slice(1)}</Tooltip>}
                                      >
                                        <em className={`icon-${icon}`} />
                                      </OverlayTrigger>
                                    </div>
                                  ))}
                                </div>
                              </td>
                              <td className="w-142">
                                <div
                                  role="button"
                                  onClick={toggleDates}
                                  className="tbDate"
                                >
                                  Select Date <em className="icon-chevron-right" />
                                </div>
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="#Inside">
                  <Table responsive className="mb-0">
                    <tbody>
                      {tableData.map((row, index) => {
                        if (row.type === "header") {
                          return (
                            <tr key={index} className="odd">
                              <td colSpan={4}>{row.month}</td>
                            </tr>
                          );
                        } else if (row.type === "date") {
                          return (
                            <tr key={index} className="even">
                              <td className="w-383">{row.date}</td>
                              <td className="w-245">
                                <span className={row.price === "$244.91" ? "active" : ""}>
                                  {row.price}
                                </span>
                              </td>
                              <td className="w-160">
                                <div className="tbIcon d-flex">
                                  {row.icons.map((icon, i) => (
                                    <div
                                      key={i}
                                      role="button"
                                      className="tbIcon_items"
                                      aria-label="tbIcon-btn"
                                    >
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>{icon.charAt(0).toUpperCase() + icon.slice(1)}</Tooltip>}
                                      >
                                        <em className={`icon-${icon}`} />
                                      </OverlayTrigger>
                                    </div>
                                  ))}
                                </div>
                              </td>
                              <td className="w-142">
                                <div
                                  role="button"
                                  onClick={toggleDates}
                                  className="tbDate"
                                >
                                  Select Date <em className="icon-chevron-right" />
                                </div>
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </Table>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
    </>
  );
}
