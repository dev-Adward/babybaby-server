package com.app.babybaby.repository.purchase;

import com.app.babybaby.repository.purchase.purchase.PurchaseRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class PurchaseRepositoryTests {
    @Autowired
    PurchaseRepository purchaseRepository;
}