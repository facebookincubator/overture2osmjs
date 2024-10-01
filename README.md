## **Fall 2024 - Overture Data Dictionary Scope**

### **Project Summary**
The **Overture Maps Foundation** maintains a global map dataset, including a subset of Places data that can enhance **OpenStreetMap (OSM)**. The goal of this project is to convert Overture data to match the OSM schema, enabling seamless integration.

Existing tools include:
- **Overture2OSM**: A JSON dictionary mapping Overture categories to OSM tags.
- **OvertureToOSM**: A Python library that facilitates schema conversion.

Two challenges remain:
1. **Address Data Conversion**: Automating the process of converting Overture's single-string addresses into OSM’s key-value format (street name, number, city, etc.).
2. **JavaScript Integration**: Developing a JavaScript module for real-time conversion within the OSM editor (e.g., [RapidEditor](https://rapideditor.org)).

---

### **Stakeholder Information**
| Name               | Email               | Role                                                    |
|--------------------|---------------------|---------------------------------------------------------|
| Christopher Beddow | cbed@meta.com       | Data Analyst & Project Leader                           |
| Benjamin Clark     | clarkbed@meta.com   | Rapid Editor & OSM Software Engineer (Advisor)          |
| Peter Dosev        | pdosev@gmail.com    | MLH Fellow                                              |
| Opeyemi R Oduyemi  | yhermii@gmail.com   | MLH Fellow                                              |
| Alex Wikes         | aw@awilkes.com      | Pod Leader                                              |

---

### **Fellow Technical Onboarding**

To get started, set up a local environment and explore the resources listed below to familiarize yourself with the project and its goals.

#### **Key Resources**:
- [Intro to OSM and Map Editing](https://www.youtube.com/watch?v=NQ7A6gztGfo)
- [OvertureToOSM GitHub](https://github.com/cbeddow/overture2osm)
- [Places Data in Overture Maps](https://docs.overturemaps.org/guides/places/)
- [OpenStreetMap Tags](https://wiki.openstreetmap.org/wiki/Tags)

#### **Starter Tasks**:
1. **Set Up**: Request access to the repository.
2. **Review Python Code**: Explore this Python code to understand conversion methods: [Python Conversion Code](https://gist.github.com/cbeddow/c5014f06456413a74348640b60f4fb7f).
3. **Select Test Cities**: Choose testing areas from 10 cities across different countries with varying address systems.

---

### **Deliverables and Timeline**

| Counter | Task Description                                              | Ideal Deadline    |
|---------|---------------------------------------------------------------|-------------------|
| 1       | Select test cities                                             | Sep 20, 2024      |
| 2       | Proof of concept: Data conversion (excluding addresses)        | Oct 11, 2024      |
| 3       | Proof of concept: Address conversion using Placekey API        | Oct 18, 2024      |
| 4       | Address conversion using geocoders (Nominatum, Pelias, etc.)   | Oct 25, 2024      |
| 5       | Benchmarking plan for address conversion performance           | Nov 8, 2024       |
| 6       | Test all address conversion methods and finalize the approach  | Nov 22, 2024      |
| 7       | Complete the JavaScript module for conversion                  | Nov 29, 2024      |
| 8       | Live demo for Overture and Meta audience                       | Dec 5, 2024       |

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
