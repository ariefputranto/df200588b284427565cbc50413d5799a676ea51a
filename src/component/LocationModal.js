import React, { useContext, useState } from 'react';

import Sticky from '../basic/Sticky'
import Image from '../basic/Image'
import Row from '../basic/Row'
import Modal from '../basic/Modal'
import Paragraph from '../basic/Paragraph'
import Input from '../basic/Input'

import LocationModalItem from '../component/LocationModalItem'

import CloseIcon from '../images/close.svg'
import ExpandIcon from '../images/expand-icon.svg'

import { StoreContext } from '../storage/Store';

function LocationModal() {
  const locationMaster = [
    {
      address: "Kulina",
      address_detail: "Jalan Tulodong Atas 28, Senayan, Kebayoran"
    },
    {
      address: "Pancoran Riverside Appartement",
      address_detail: "RT.6 / RW.1, Pengadegan, Pancoran, South Jakarta"
    },
    {
      address: "Test",
      address_detail: "Jl Ceylon 82 D, Dki Jakarta"
    },
    {
      address: "Test 2",
      address_detail: "Jl Agung Niaga IV Bl G-4/53, Dki Jakarta"
    },
    {
      address: "Test 3",
      address_detail: "Jl Pleburan VIII/64, Jawa Tengah"
    },
    {
      address: "Test 4",
      address_detail: "Jl Jembatan Tiga 36 DZ, Jakarta"
    },
    {
      address: "Test 5",
      address_detail: "Jl Agung Niaga IV Bl G-4/53, Dki Jakarta"
    },
    {
      address: "Test 6",
      address_detail: "Jl Pleburan VIII/64, Jawa Tengah"
    },
    {
      address: "Test 7",
      address_detail: "Jl Jembatan Tiga 36 DZ, Jakarta"
    },
    {
      address: "Test 8",
      address_detail: "Jalan Tulodong Atas 28, Senayan, Kebayoran"
    },
    {
      address: "Pancoran Riverside Appartement 2",
      address_detail: "RT.6 / RW.1, Pengadegan, Pancoran, South Jakarta"
    },
    {
      address: "Test 9",
      address_detail: "Jl Ceylon 82 D, Dki Jakarta"
    },
    {
      address: "Test 10",
      address_detail: "Jl Agung Niaga IV Bl G-4/53, Dki Jakarta"
    },
  ]

  const { showModalLocation, setShowModalLocation, locationData, setLocationData } = useContext(StoreContext)

  const onLocationChange = (event) => {
    var value = event.target.value
    if (value.length > 2) {
      var filteredLocation = locationMaster.filter((data) => {
        value = value.toLowerCase()
        return data.address.toLowerCase().indexOf(value) !== -1 || data.address_detail.toLowerCase().indexOf(value) !== -1
      })

      setLocationData(filteredLocation)
    } else {
      setLocationData([])
    }
  }

  return showModalLocation && (
    <Sticky bottom full static_transparent>
      <Modal>
        <Image src={ CloseIcon } ml="auto" onClick={() => setShowModalLocation(false)} />
        <Paragraph font_size="24px" bold mt="16px" main_text>Check available food in your location!</Paragraph>
        <Input mt="16px" location onChange={ onLocationChange } />
        <Row vertical overflow="scroll" mt="16px">
          {
            locationData.map((value, index) => {
              return <LocationModalItem address={ value.address } address_detail={ value.address_detail } />
            })
          }
        </Row>
      </Modal>
    </Sticky>
  )
}

export default LocationModal
