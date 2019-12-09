import React, {
    useState,
    useEffect
} from 'react';
import {
    Button
} from 'react-bootstrap';
import axios from 'axios';
import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';
import {
    faSyncAlt
} from '@fortawesome/free-solid-svg-icons';

import Wrapper from '../../hoc/Wrapper';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Card from '../../components/Card/Card';
import AddModelModal from '../../components/AddModelModal/AddModelModal';
import ModelsTable from '../../components/ModelsTable/ModelsTable';

import styles from './Models.module.css';

function Models(props) {

    const [models, setModels] = useState({
        data: [
            {
                name: 'Test1',
                platform: 'tensorflow',
                upload_status: 'Success'
            },
            {
                name: 'Test2',
                upload_status: 'Uploading...'
            },
            {
                name: 'Test3',
                upload_status: 'Failed'
            }
        ],
        loading: false
    });

    const [addModelModalVisible, setAddModelModalVisible] = useState(false);

    function loadModels() {

        axios.get(`/api/models`)
            .then(
                (response) => {
                    setModels({
                        data: response.data,
                        loading: false
                    })
                },
                (error) => {
                    setModels({
                        error: error.response.data,
                        loading: false
                    })
                }
            )

    }

    function onRefreshClick() {

        setModels({
            data: [],
            loading: true
        });

        loadModels();

    }

    useEffect(() => {

        // loadModels();

    }, []);

    return (
        <Wrapper>
            <AddModelModal
                show={addModelModalVisible}
                onHide={() => setAddModelModalVisible(false)}
            />
            <HeaderBar
                header='All Models'
            >
                <Button size='sm' variant='secondary' onClick={() => setAddModelModalVisible(true)}>+ Add</Button>
                <FontAwesomeIcon onClick={onRefreshClick} icon={faSyncAlt} className={styles.refresh} />
            </HeaderBar>
            <Card>
                <div className='table-responsive'>
                    <ModelsTable
                        models={models}
                    />
                </div>
            </Card>
        </Wrapper>
    )

}

export default Models;