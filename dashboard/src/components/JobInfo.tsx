import styled from 'styled-components';
import { Button, Paper, Stack, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { postData } from '../services/request';
import TechTags from "../components/techTags";
import { useEffect } from 'react';

const JobInfo = styled.div`
	padding: 3rem 3rem;

	max-height: 50vh;
	height: 50vh;
	overflow: hidden;
`;

const Description = styled.div`
	font-size: 1.2rem;
	overflow: auto;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
`;

const TextInfo = styled.div`padding: 1rem 0;`;
const DisplayJob = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 2rem;
`;

const OptionsGroup = styled.div`padding: 3rem 1rem;`;

function JobsInfo({ data }: { data: any }) {
	const {
		apply,
		company,
		company_link,
		date,
		description,
		id,
		insights,
		job_type,
		link,
		title,
		expired,
	} = data.job_records[0];

	const invalidateJob = async () => {
		let body = {
			id: id
		};
		console.log("Body here", body)
		let url = 'http://127.0.0.1:5000/remove';
		if (await postData(body, url)) {
			console.log("Deu certo")
		} else {
			console.log("Deu errado")
		}
	};


	function cacheAndSyncData(key, data) {
		// Cache information
		localStorage.setItem(key, data);

		// Listen for changes in storage (synchronize across tabs)
		window.addEventListener('storage', function (event) {
			if (event.key === key) {
				// Handle the event and update the data in this tab
				const updatedData = event.newValue;
				console.log(`Cached data (${key}) updated:`, updatedData);

				// You can also trigger a callback function here to react to changes
			}
		});

		// Access cached information
		const cachedData = localStorage.getItem(key);
		console.log(`Cached data (${key}):`, cachedData);

		// Return the cached data, if needed
		return cachedData;
	}

	const applyJob = async () => {
		let body = {
			id: id
		};
		console.log("Body here", body)
		let url = 'http://127.0.0.1:5000/apply';
		if (await postData(body, url)) {
			console.log("Deu certo")
		} else {
			console.log("Deu errado")
		}
	};



	const acessJob = () => {
		window.open(link, '_blank');
	};

	useEffect(() => {
		// Define your function to make the request here.
		const updateWindow = async () => {
			let body = {
				url: link
			};
			console.log("Body here", body)
			let url = 'http://localhost:3000/set_url';
			if (await postData(body, url)) {
				console.log("Deu certo")
			} else {
				console.log("Deu errado")
			}
		};
		console.log("Run here")



		// Call the fetchData function whenever yourState changes.
		return updateWindow();
	}, []);



	const cachedData = cacheAndSyncData('myCachedData', link);
	return (
		<Paper elevation={3}>
			{' '}
			<JobInfo>
				<div>
					<Stack direction="row" spacing={1}>
						<Typography variant="h4">{title}</Typography>
						<Chip label={job_type} color="primary" />
						{(expired) && <Chip label="Expirada" color="error" />}
					</Stack>
				</div>
				<div>
					<Stack direction="row" spacing={2}>
						<Typography variant="h5">Empresa: {company}</Typography>

						<Button variant="contained" color="error">
							Bloquear empresa
						</Button>
					</Stack>
				</div>
				<DisplayJob>
					{' '}
					<TextInfo>
						{' '}
						<Description>
							<strong>Descrição :</strong> <br /> <Description> {description}</Description>
						</Description>
					</TextInfo>
					<OptionsGroup>
						<div>
							<Typography variant="h5">Keywords: </Typography>
							<TechTags description={description} /></div>
						<Stack direction="column" spacing={3}>
							<Button
								variant="contained"
								onClick={() => {
									acessJob();
								}}
								color="primary"
								fullWidth
							>
								Acessar vaga
							</Button>

							<Button variant="contained" onClick={async () => { await applyJob() }} color="success" fullWidth>
								Vaga aplicada
							</Button>
							<Button variant="contained" onClick={async () => { await invalidateJob() }} color="error" fullWidth>
								Remover vaga
							</Button>
						</Stack>
					</OptionsGroup>
				</DisplayJob>
			</JobInfo>{' '}
		</Paper>
	);
}

export default JobsInfo;
