"use client";
import Image from "next/image";
import Footer from "@/app/shared/components/footer/footer";
import React, { useCallback, useEffect, useState } from "react";
import "./available-trips.scss";
import SearchIcon from "@/app/shared/components/icons/search-icon";
import TripCard from "@/app/shared/components/trip-card/trip-card";
import { useRouter } from "next/navigation";
import { getTrips, getVehicleTypes } from "@/app/service/auth.service";
import Spinner from "@/app/shared/components/Spinner";
import { toast } from "react-toastify";
import { ITrips } from "@/app/models/trips-model";
import useDebounce from "@/app/shared/hooks/useDebounce";
import _ from "lodash";

export default function availableTrips() {
  const [query, setQuery] = useState("");
  const [isloading, setisloading] = useState(false);
  const [allTrips, setallTrips] = useState<ITrips>([]);
  const [selectedTab, setselectedTab] = useState<any>(null);
  const [tabs, settabs] = useState<any>([]);
  const [mergedParams, setMergedParams] = useState<any>({
    departureState: "",
    destinationState: "",
    departureDate: null,
    vehicleTypeId: selectedTab?.id,
    search: "",
    description: "",
  });

  const router = useRouter();

  // Fetch vehicle types on component mount
  const fetchVehicleTypes = () => {
    getVehicleTypes({}).subscribe({
      next: (res) => {
        if (res && res.data?.length) {
          settabs(res.data);
          // Set first tab as default selected
          const firstTab = res.data[0];
          setselectedTab(firstTab);
          
          // Update merged params with the default vehicle type ID
          setMergedParams((prev:any) => ({
            ...prev,
            vehicleTypeId: firstTab.id
          }));
        }
      },
      error: (err) => {
        console.error("Error fetching vehicle types:", err);
        toast.error("Could not load vehicle types");
      },
      complete: () => {}
    });
  };

  // Fetch trips based on current parameters
  const fetchTrips = (payload:any) => {
    setisloading(true);
    
    console.log("Fetching trips with params:", payload); // Debug log
    
    getTrips(payload ? { ...payload } : { ...mergedParams }).subscribe({
      next: (res) => {
        if (res) {
          console.log("Received trips:", res.data);
          setallTrips(res.data);
          
          if (res.data?.length) {
            localStorage.setItem(
              "similarTrips",
              JSON.stringify(res.data.slice(0, 2))
            );
          }
        } else if (res.error) {
          toast.info(res.error);
        }
      },
      error: (msg) => {
        toast.error(msg.message || "Error fetching trips");
        console.error("Trip fetch error:", msg);
      },
      complete: () => {
        setisloading(false);
      }
    });
  };

  // Handle search input with debounce
  const debouncedSearch = useCallback(
    _.debounce((searchTerm, params) => {
      fetchTrips({ ...params, description: searchTerm, search: searchTerm });
    }, 900),
    []
  );

  // Handle search input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);
    
    const updatedParams = {
      ...mergedParams,
      search: searchTerm,
      description: searchTerm
    };
    
    setMergedParams(updatedParams);
    debouncedSearch(searchTerm, updatedParams);
  };

  // Load initial data on component mount
  useEffect(() => {
    fetchVehicleTypes();
  }, []);

  // Load trips when initial parameters are ready
  useEffect(() => {
    // Early return if we don't have a selected tab yet
    if (!selectedTab) return;
    
    const prevPageData = localStorage.getItem("firstStep");
    
    if (!prevPageData) {
      router.push("/");
      return;
    }
    
    try {
      const firstStep = JSON.parse(prevPageData);
      const {
        departureState,
        destinationState,
        travelDate
      } = firstStep;
      
      // Create the parameters for fetching trips
      const tripParams = {
        departureState,
        destinationState,
        departureDate: travelDate,
        search: mergedParams.search || "",
        description: mergedParams.description || "",
        vehicleTypeId: selectedTab.id
      };
      
      console.log("Tab selected:", selectedTab.category);
      console.log("Using trip params:", tripParams);
      
      // Update merged params and fetch trips
      setMergedParams(tripParams);
      fetchTrips(tripParams);
      
    } catch (error) {
      console.error("Error parsing first step data:", error);
      toast.error("Error loading trip parameters");
      router.push("/");
    }
    
  }, [selectedTab]); // Only depend on selectedTab changing

  // Handle tab selection
  const handleTabSelect = (tab:any) => {
    setisloading(true);
    setselectedTab(tab);
    setMergedParams((prev: any) => ({
      ...prev,
      vehicleTypeId: tab.id,
    }));
    
    fetchTrips({ 
      ...mergedParams, 
      vehicleTypeId: tab.id 
    });
  };

  return (
    <>
      <main className="-mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] lg:min-h-[80vh] py-10 px-4">
        <section className="m-h-96 w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12 available-trips-page">
          <div className="w-full flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between available-trip-header">
            <h2 className="text-xl 2xl:3xl">Available Trips</h2>
            <div className="min-w-4/12 available-trip-search-input">
              <SearchIcon />
              <input 
                value={query} 
                onChange={handleChange} 
                placeholder="Search trips..." 
              />
            </div>
          </div>
          
          <div className="mt-10">
            <label className="text-xl text-urban-green">
              Select Vehicle Type
            </label>
            
            <div className="flex items-center gap-4 mt-6">
              {tabs?.map((tab:any, index:any) => (
                <div
                  key={tab.id || index}
                  className={`${
                    selectedTab && selectedTab.id === tab.id 
                      ? "border-urban-green" 
                      : ""
                  } py-2 px-5 2xl:py-3 2xl:px-6 2xl:text-xl font-light rounded-full text-center bg-gray-200 cursor-pointer border hover:border-urban-green`}
                  onClick={() => handleTabSelect(tab)}
                >
                  {tab?.category || `Type ${index + 1}`}
                </div>
              ))}
            </div>
            
            <div className="w-full flex justify-center items-center mt-10">
              {isloading ? (
                <Spinner isLoading size={60} />
              ) : (
                <div className="w-full">
                  {allTrips && allTrips.length ? (
                    <div className="trips-card-container w-full grid grid-cols-1 gap-y-14 lg:gap-y-10 lg:grid-cols-3 lg:gap-x-10">
                      {allTrips.map((trip, index) => (
                        <TripCard data={trip} key={index} />
                      ))}
                    </div>
                  ) : (
                    <div className="w-full min-h-60 flex justify-center items-center">
                      <h1>No available trips for this vehicle type</h1>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}