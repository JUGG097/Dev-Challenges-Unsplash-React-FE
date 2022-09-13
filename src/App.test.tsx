import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { itemData } from "./utils/helper";
import { renderWithProviders } from "./utils/redux-test";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Landing Page Rendering", () => {
	test("NavBar elements displayed correctly", async () => {
    const data = {
			images: [],
		};

		act(() => {
			mockedAxios.get.mockImplementationOnce(() =>
				Promise.resolve(data)
			);
		});
    
    renderWithProviders(<App />);
		expect(screen.getByText("Add a photo")).toBeInTheDocument();
    expect(screen.getByAltText("Unsplash Logo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search by name")).toBeInTheDocument();
    expect( await screen.findByText("No Photos Found")).toBeInTheDocument();
	});

  test("Masonry Images upon successful fetch", async () => {
    const data = {
			data:{
        success: true,
        data: itemData
      }
		};

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve(data)
    );
		
    renderWithProviders(<App />);
    expect(
			await screen.findAllByText("Delete")
		).toHaveLength(8)
  })
});

describe("Adding and Deleting an Image", () => {
  beforeEach(() => {
    const data = {
			data:{
        success: true,
        data: itemData
      }
		};

    const postData = {
			data:{
        success: true,
        data: itemData[0]
      }
		};

    const deleteData = {
			data:{
        success: true,
        data: []
      }
		};

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve(data)
    );

    act(() => {
			mockedAxios.post.mockImplementationOnce(() =>
				Promise.resolve(postData)
			);
		});

    act(() => {
			mockedAxios.delete.mockImplementationOnce(() =>
				Promise.resolve(deleteData)
			);
		});
  })

	test("Tests that adding a new image button works", async () => {
    renderWithProviders(<App />);

    expect(
			await screen.findAllByText("Delete")
		).toHaveLength(8)

    userEvent.click(screen.getByText("Add a photo"))

    expect (screen.getByText("Add a new photo")).toBeInTheDocument()

    userEvent.click(screen.getByText("Submit"))

    expect( await screen.findByText("Adding new image...")).toBeInTheDocument();

    expect(
			await screen.findAllByText("Delete")
		).toHaveLength(9)
	});

  test("Tests that deleting of an image works", async () => {
    renderWithProviders(<App />);

    expect(
			await screen.findAllByText("Delete")
		).toHaveLength(8)

    userEvent.click(screen.getAllByText("Delete")[0])

    expect (screen.getByText("Are you sure?")).toBeInTheDocument()

    userEvent.click(screen.getAllByText("Delete")[8]);

    expect( await screen.findByText("Deleting image...")).toBeInTheDocument();

    expect(
			await screen.findAllByText("Delete")
		).toHaveLength(7)
	});
});