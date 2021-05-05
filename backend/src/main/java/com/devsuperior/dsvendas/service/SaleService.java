package com.devsuperior.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	SaleRepository saleRepository;
	
	/*1 e 2 corrigir problema de varios select para este exemplo
	 * */
	@Autowired
	SellerRepository sellerRepository;//1
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		
		sellerRepository.findAll();//2
		
		Page<Sale> result = saleRepository.findAll(pageable);
		
		return  result.map(x -> new SaleDTO(x));
	}
	
}
